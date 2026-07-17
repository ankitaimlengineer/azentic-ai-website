import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, type, message } = body;

    // ૧. અહીં તમારી Web3Forms Access Key નાખો (જે તમને મેઈલમાં મળી હશે)
    const ACCESS_KEY = "90b0e191-38dd-410b-951f-b0ae72dd6527"; 

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: ACCESS_KEY,
        name: name,
        email: email,
        subject: `New AI Inquiry: ${type}`,
        message: message,
        from_name: "Azentic AI Business",
      }),
    });

    const result = await response.json();
    if (result.success) return NextResponse.json({ success: true });
    else return NextResponse.json({ success: false }, { status: 500 });

  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}