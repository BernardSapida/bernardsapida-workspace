import { resume } from "~/features/resumes/constants";
import { PDFViewer, ResumeDocument } from "~/features/resumes/components/pdf";

export default async function ResumePage() {
  return (
    <PDFViewer className="min-h-screen w-full">
      <ResumeDocument resume={resume} />
    </PDFViewer>
  );
}
