import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AssessmentForm from "@/components/AssessmentForm";

export default async function AssessmentPage() {
const cookieStore = await cookies();
const accessCookie = cookieStore.get("direction90_access")?.value;

if (accessCookie !== "granted") {
redirect("/checkout");
}

return <AssessmentForm />;
}




