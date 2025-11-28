import { Job } from './JobCard';

interface JobDetailsProps {
  job: Job;
}

export default function JobDetails({ job }: JobDetailsProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 h-max">
      <h2 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">{job.title}</h2>

      <h3 className="mb-6">
        <span
          className="inline-block w-full h-1 bg-orange-500 mb-3"
          style={{ backgroundColor: 'rgb(238, 103, 10)' }}
        ></span>
        <span className="text-2xl font-bold text-gray-900">Recruitment Information</span>
      </h3>

      <dl className="space-y-8">
        <div>
          <dt className="text-xl font-semibold text-gray-900 mb-3">Job Description</dt>
          <dd className="w-full h-px bg-gray-300 mb-4"></dd>
          <dd className="text-gray-700 leading-relaxed">
            <div className="prose prose-lg max-w-none">
              <p>{job.description}</p>
            </div>
          </dd>
        </div>

        <div>
          <dt className="text-xl font-semibold text-gray-900 mb-3">Qualifications</dt>
          <dd className="w-full h-px bg-gray-300 mb-4"></dd>
          <dd className="text-gray-700 leading-relaxed">
            <div className="prose prose-lg max-w-none">
              <ul className="space-y-2">
                {job.requirements.map((req: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold">•</span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </dd>
        </div>

        <div>
          <dt className="text-xl font-semibold text-gray-900 mb-3">Salary</dt>
          <dd className="w-full h-px bg-gray-300 mb-4"></dd>
          <dd className="text-gray-700 leading-relaxed">
            <div className="prose prose-lg max-w-none">
              <p>Competitive salary based on experience and qualifications</p>
            </div>
          </dd>
        </div>

        <div>
          <dt className="text-xl font-semibold text-gray-900 mb-3">Location</dt>
          <dd className="w-full h-px bg-gray-300 mb-4"></dd>
          <dd className="text-gray-700 leading-relaxed">
            <div className="prose prose-lg max-w-none">
              <p>{job.location}</p>
            </div>
          </dd>
        </div>
      </dl>
    </div>
  );
}
