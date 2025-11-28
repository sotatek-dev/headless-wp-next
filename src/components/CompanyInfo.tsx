interface CompanyInfoData {
  establishmentDate: string;
  ceo: string;
  businessDetails: string[];
  employeeCount: string;
  capital: string;
  salesAmount: string;
  headquarters: {
    name: string;
    address: string;
    mapUrl: string;
  };
  branchOffices: Array<{
    name: string;
    address: string;
    mapUrl: string;
  }>;
  corporateSite: string;
}

interface CompanyInfoProps {
  onApplyClick: () => void;
}

const companyInfo: CompanyInfoData = {
  establishmentDate: 'June 2010',
  ceo: 'Yuganandan Subramanyan',
  businessDetails: [
    'We dispatch and introduce top-level engineers from countries around the world, including Japan, India, Vietnam, Southeast Asia, and Europe, to major clients both in Japan and overseas.',
    'We also provide technical support for contract work, offshore development, and business consulting services to Asian countries and India, depending on client needs.',
  ],
  employeeCount: '520 people',
  capital: '50 million yen',
  salesAmount: '3.52 billion yen (as of March 2012)',
  headquarters: {
    name: 'Yokohama Head Office',
    address: '2nd floor, Yomiuri Yokohama Building, 51-1 Yamashita-cho, Naka-ku, Yokohama, Kanagawa Prefecture',
    mapUrl: 'https://maps.google.co.jp/maps?output=embed&q=横浜本社　神奈川県横浜市中区山下町51-1  読売横浜ビル2階',
  },
  branchOffices: [
    {
      name: 'Utsunomiya Sales Office',
      address: '1-1-1 Chuo, Utsunomiya City, Tochigi Prefecture Utsunomiya Axis Building 309',
      mapUrl:
        'https://maps.google.co.jp/maps?output=embed&q=宇都宮営業所　栃木県宇都宮市中央1-1-1　宇都宮アクシスビル309',
    },
    {
      name: 'Nagoya Sales Office',
      address: 'Cosmo Building Sumiyoshi 302, 3-8 Sumiyoshicho, Kariya City, Aichi Prefecture',
      mapUrl: 'https://maps.google.co.jp/maps?output=embed&q=名古屋営業所　愛知県刈谷市住吉町3-8　コスモビル住吉302',
    },
    {
      name: 'Osaka Sales Office',
      address: 'MF Tenmabashi Building 3F-B, 1-7-4 Tanimachi, Chuo-ku, Osaka City, Osaka Prefecture',
      mapUrl:
        'https://maps.google.co.jp/maps?output=embed&q=大阪営業所　大阪府大阪市中央区谷町1-7-4　MF天満橋ビル3階-B',
    },
  ],
  corporateSite: 'https://sunwells.com/',
};

export default function CompanyInfo({ onApplyClick }: CompanyInfoProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="mb-8">
        <button
          onClick={onApplyClick}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300"
          style={{ backgroundColor: 'rgb(238, 103, 10)' }}
        >
          APPLY
        </button>
      </div>

      <h3 className="mb-6">
        <span
          className="inline-block w-full h-1 bg-orange-500 mb-3"
          style={{ backgroundColor: 'rgb(238, 103, 10)' }}
        ></span>
        <span className="text-2xl font-bold text-gray-900">Company Information</span>
      </h3>

      <dl className="space-y-6">
        <div>
          <dt className="text-lg font-semibold text-gray-900 mb-2">Date of establishment</dt>
          <dd className="w-full h-px bg-gray-300 mb-3"></dd>
          <dd className="text-gray-700">{companyInfo.establishmentDate}</dd>
        </div>

        <div>
          <dt className="text-lg font-semibold text-gray-900 mb-2">CEO</dt>
          <dd className="w-full h-px bg-gray-300 mb-3"></dd>
          <dd className="text-gray-700">{companyInfo.ceo}</dd>
        </div>

        <div>
          <dt className="text-lg font-semibold text-gray-900 mb-2">Business details</dt>
          <dd className="w-full h-px bg-gray-300 mb-3"></dd>
          <dd className="text-gray-700 leading-relaxed">
            <div className="prose prose-lg max-w-none">
              {companyInfo.businessDetails.map((detail: string, index: number) => (
                <p key={index}>{detail}</p>
              ))}
            </div>
          </dd>
        </div>

        <div>
          <dt className="text-lg font-semibold text-gray-900 mb-2">Number of employees</dt>
          <dd className="w-full h-px bg-gray-300 mb-3"></dd>
          <dd className="text-gray-700">{companyInfo.employeeCount}</dd>
        </div>

        <div>
          <dt className="text-lg font-semibold text-gray-900 mb-2">Capital</dt>
          <dd className="w-full h-px bg-gray-300 mb-3"></dd>
          <dd className="text-gray-700">{companyInfo.capital}</dd>
        </div>

        <div>
          <dt className="text-lg font-semibold text-gray-900 mb-2">Amount of sales</dt>
          <dd className="w-full h-px bg-gray-300 mb-3"></dd>
          <dd className="text-gray-700">{companyInfo.salesAmount}</dd>
        </div>

        <div>
          <dt className="text-lg font-semibold text-gray-900 mb-2">Headquarters location</dt>
          <dd className="w-full h-px bg-gray-300 mb-3"></dd>
          <dd className="text-gray-700">
            <span className="block mb-4">
              {companyInfo.headquarters.name}: {companyInfo.headquarters.address}
            </span>
            <div className="w-full h-64 border-0 rounded-lg overflow-hidden">
              <iframe
                src={companyInfo.headquarters.mapUrl}
                className="w-full h-full"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </dd>
        </div>

        <div>
          <dt className="text-lg font-semibold text-gray-900 mb-2">Branch office location</dt>
          <dd className="w-full h-px bg-gray-300 mb-3"></dd>
          <dd className="text-gray-700">
            <div className="space-y-6">
              {companyInfo.branchOffices.map((office, index: number) => (
                <div key={index}>
                  <span className="block mb-2">
                    {office.name} {office.address}
                  </span>
                  <div className="w-full h-48 border-0 rounded-lg overflow-hidden">
                    <iframe src={office.mapUrl} className="w-full h-full" allowFullScreen loading="lazy"></iframe>
                  </div>
                </div>
              ))}
            </div>
          </dd>
        </div>

        <div>
          <dt className="text-lg font-semibold text-gray-900 mb-2">Corporate site</dt>
          <dd className="w-full h-px bg-gray-300 mb-3"></dd>
          <dd className="text-gray-700">
            <a
              href={companyInfo.corporateSite}
              target="_blank"
              rel="noreferrer"
              className="text-orange-600 hover:text-orange-700 underline"
            >
              {companyInfo.corporateSite}
            </a>
          </dd>
        </div>
      </dl>
    </div>
  );
}
