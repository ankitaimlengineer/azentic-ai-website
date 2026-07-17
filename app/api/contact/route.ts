import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, type, message } = body;

    // ૧. તમારી Web3Forms કી અહીં નાખો
    const ACCESS_KEY = "90b0e191-38dd-410b-951f-b0ae72dd6527"; 

    // ૨. Web3Forms ને ડેટા મોકલો
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: ACCESS_KEY,
        name: name,
        email: email,
        subject: `New Inquiry: ${type}`,
        message: message,
        from_name: "Azentic AI Website",
      }),
    });

    const result = await response.json();

    if (result.success) {
      return NextResponse.json({ message: "Success" });
    } else {
      return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ message: "Error occurred" }, { status: 500 });
  }
}