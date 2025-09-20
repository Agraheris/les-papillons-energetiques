import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function POST(request) {
  try {
    // Revalider la page des prestations et les pages dynamiques
    revalidatePath('/prestations');
    revalidatePath('/prestations/[slug]', 'page');
    
    // Si vous avez d'autres pages qui utilisent Sanity, ajoutez-les ici
    // revalidatePath('/');
    
    console.log('Revalidation des prestations réussie');
    
    return NextResponse.json({ 
      revalidated: true, 
      message: 'Prestations revalidated',
      timestamp: new Date().toISOString()
    });
  } catch (err) {
    console.error('Erreur revalidation:', err);
    return NextResponse.json(
      { error: 'Error revalidating' }, 
      { status: 500 }
    );
  }
}