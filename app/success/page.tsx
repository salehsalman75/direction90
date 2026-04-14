export default function SuccessPage() {
return (
<div style={{
height: "100vh",
display: "flex",
alignItems: "center",
justifyContent: "center",
flexDirection: "column",
fontFamily: "sans-serif"
}}>
<h1>✅ Payment Successful</h1>
<p>You now have access to Direction90.</p>

<a
href="/"
style={{
marginTop: "20px",
padding: "10px 20px",
background: "black",
color: "white",
borderRadius: "8px",
textDecoration: "none"
}}
>
Go Home
</a>
</div>
);
}


