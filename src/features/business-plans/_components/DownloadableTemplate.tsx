import { Button, Card, CardBody } from "@heroui/react";
import { memo, useState, type FunctionComponent } from "react";
import { FaCheck } from "react-icons/fa";
import { TEMPLATES } from "~/features/business-plans/constants";

interface DownloadableTemplateProps {}

const DownloadableTemplate: FunctionComponent<DownloadableTemplateProps> = memo(
  () => {
    const [selectedTemplate, setSelectedTemplate] = useState<{
      format: "pdf" | "pptx";
      templateId: string;
    } | null>(null);
    const [showPreview, setShowPreview] = useState(false);

    return (
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">
            Download Your Business Plan
          </h2>
          <p className="text-slate-600 text-lg">
            Select your preferred format to download
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TEMPLATES.map((template) => (
            <Card
              key={template.id}
              className={`border-slate-200 shadow-sm hover:shadow-lg transition-all cursor-pointer overflow-hidden ${
                selectedTemplate?.templateId === template.id
                  ? `ring-2 ${
                      template.format === "pdf"
                        ? "ring-blue-500"
                        : "ring-orange-500"
                    }`
                  : ""
              }`}
            >
              <CardBody className="p-0">
                {/* Preview Image */}
                <div className="w-full h-64 bg-slate-100 overflow-hidden flex items-center justify-center border-b border-slate-200">
                  <img
                    // src={template.previewImageUrl}
                    alt={`${template.name} preview`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        parent.innerHTML =
                          '<div class="text-slate-400 text-center"><p class="text-sm">Preview image</p></div>';
                      }
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-slate-900 mb-2">
                    {template.name}
                  </h4>
                  <p className="text-slate-600 text-sm mb-6">
                    {template.description}
                  </p>
                  <div className="space-y-2">
                    <Button
                      onPress={() => {
                        setSelectedTemplate({
                          format: template.format,
                          templateId: template.id,
                        });
                        setShowPreview(true);
                      }}
                      variant="flat"
                      className="w-full"
                    >
                      View Template
                    </Button>
                    <Button
                      onPress={() => {
                        setSelectedTemplate({
                          format: template.format,
                          templateId: template.id,
                        });
                      }}
                      className={`w-full text-white ${
                        template.format === "pdf"
                          ? "bg-blue-600 hover:bg-blue-700"
                          : "bg-orange-600 hover:bg-orange-700"
                      }`}
                    >
                      Download {template.format.toUpperCase()}
                    </Button>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* Info Banner */}
        {selectedTemplate && (
          <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-lg text-center">
            <p className="text-sm text-slate-700">
              <FaCheck className="inline mr-1" /> You have selected the{" "}
              <strong>{selectedTemplate.format.toUpperCase()}</strong> template.
              Click the download button to generate your business plan.
            </p>
          </div>
        )}

        <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg text-center">
          <p className="text-sm text-slate-700">
            <FaCheck className="inline mr-1" /> All your inputs have been saved
            and will be included in the downloaded template
          </p>
        </div>
      </div>
    );
  }
);

export default DownloadableTemplate;
