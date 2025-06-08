import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, surname, email, message } = await request.json();

    // Validation des données
    if (!name || !surname || !email || !message) {
      return NextResponse.json(
        { error: "Tous les champs sont requis" },
        { status: 400 }
      );
    }

    // Validation email basique
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Email invalide" }, { status: 400 });
    }

    // Envoi de l'email
    const { data, error } = await resend.emails.send({
      from: "contact@lepapillonenergetique.fr",
      to: [process.env.CONTACT_EMAIL],
      subject: `Nouveau message de ${name} ${surname}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #e879f9, #d8b4fe); padding: 20px; border-radius: 10px 10px 0 0;">
            <h2 style="color: white; margin: 0; text-align: center;">
              🦋 Nouveau message depuis le site
            </h2>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <div style="margin-bottom: 20px;">
              <h3 style="color: #7c3aed; margin-bottom: 10px;">Informations du contact :</h3>
              <p style="margin: 5px 0;"><strong>Nom :</strong> ${name} ${surname}</p>
              <p style="margin: 5px 0;"><strong>Email :</strong> <a href="mailto:${email}" style="color: #7c3aed;">${email}</a></p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #7c3aed; margin-bottom: 10px;">Message :</h3>
              <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; border-left: 4px solid #7c3aed;">
                ${message.replace(/\n/g, "<br>")}
              </div>
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
              <a href="mailto:${email}" 
                 style="background: #7c3aed; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
                Répondre à ${name}
              </a>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #6b7280; font-size: 12px;">
            Message envoyé depuis lespapillonsenergetiques.com
          </div>
        </div>
      `,
      // Version texte pour les clients qui ne supportent pas HTML
      text: `
        Nouveau message de ${name} ${surname}
        Email: ${email}
        
        Message:
        ${message}
      `,
    });

    if (error) {
      console.error("Erreur Resend:", error);
      return NextResponse.json(
        { error: "Erreur lors de l'envoi de l'email" },
        { status: 500 }
      );
    }

    console.log("Email envoyé avec succès:", data);
    return NextResponse.json({
      success: true,
      message: "Message envoyé avec succès",
    });
  } catch (error) {
    console.error("Erreur serveur:", error);
    return NextResponse.json(
      { error: "Erreur interne du serveur" },
      { status: 500 }
    );
  }
}

// Gestion des méthodes non autorisées
export async function GET() {
  return NextResponse.json({ error: "Méthode non autorisée" }, { status: 405 });
}
