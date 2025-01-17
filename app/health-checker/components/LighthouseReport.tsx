interface AuditResult {
    id: string;
    weight: number;
    score: number;
    title: string;
    description: string;
  }
  
  interface ReportProps {
    report: {
      scores: {
        performance: number;
        accessibility: number;
        bestPractices: number;
        seo: number;
      };
      auditResults: {
        performance: AuditResult[];
        accessibility: AuditResult[];
        bestPractices: AuditResult[];
        seo: AuditResult[];
      };
    };
  }
  
  export default function LighthouseReport({ report }: ReportProps) {
    const categories = [
      { name: 'Performance', score: report.scores.performance, audits: report.auditResults.performance },
      { name: 'Accessibility', score: report.scores.accessibility, audits: report.auditResults.accessibility },
      { name: 'Best Practices', score: report.scores.bestPractices, audits: report.auditResults.bestPractices },
      { name: 'SEO', score: report.scores.seo, audits: report.auditResults.seo },
    ];
  
    const getColorClass = (score: number) => {
      if (score >= 90) return 'bg-green-500';
      if (score >= 50) return 'bg-yellow-500';
      return 'bg-red-500';
    };
  
    return (
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Lighthouse Report</h2>
        <div className="space-y-6">
          {categories.map((category) => (
            <div key={category.name} className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-lg font-medium mb-2">{category.name}</h3>
              <div className="relative pt-1 mb-4">
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-300">
                  <div
                    style={{ width: `${category.score}%` }}
                    className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${getColorClass(
                      category.score
                    )}`}
                  ></div>
                </div>
                <div className="text-right">
                  <span className="text-sm font-semibold inline-block text-gray-600">
                    {category.score}%
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="font-medium mb-2">Top 5 Audits:</h4>
                <ul className="space-y-2">
                  {category.audits.map((audit) => (
                    <li key={audit.id} className="border-b pb-2">
                      <h5 className="font-medium">{audit.title}</h5>
                      <p className="text-sm text-gray-600">{audit.description}</p>
                      <div className="mt-1 flex items-center">
                        <div className={`w-3 h-3 rounded-full mr-2 ${getColorClass(audit.score * 100)}`}></div>
                        <span className="text-sm font-medium">{Math.round(audit.score * 100)}%</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  