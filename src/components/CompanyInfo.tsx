'use client';

import { CompanyInfoData } from '@/types/api';
import { useTranslations } from 'next-intl';

interface companyProps {
  onApplyClick: () => void;
  company: CompanyInfoData;
}

export default function CompanyInfo({ company, onApplyClick }: companyProps) {
  const t = useTranslations('companyInfo');
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="mb-8">
        <button
          onClick={onApplyClick}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300"
          style={{ backgroundColor: 'rgb(238, 103, 10)' }}
        >
          {t('apply')}
        </button>
      </div>

      <h3 className="mb-6">
        <span
          className="inline-block w-full h-1 bg-orange-500 mb-3"
          style={{ backgroundColor: 'rgb(238, 103, 10)' }}
        ></span>
        <span className="text-2xl font-bold text-gray-900">{t('title')}</span>
      </h3>

      <dl className="space-y-6">
        <div>
          <dt className="text-lg font-semibold text-gray-900 mb-2">{t('dateOfEstablishment')}</dt>
          <dd className="w-full h-px bg-gray-300 mb-3"></dd>
          <dd className="text-gray-700">{company?.establishmentDate}</dd>
        </div>

        <div>
          <dt className="text-lg font-semibold text-gray-900 mb-2">{t('ceo')}</dt>
          <dd className="w-full h-px bg-gray-300 mb-3"></dd>
          <dd className="text-gray-700">{company.ceo}</dd>
        </div>

        <div>
          <dt className="text-lg font-semibold text-gray-900 mb-2">{t('businessDetails')}</dt>
          <dd className="w-full h-px bg-gray-300 mb-3"></dd>
          <dd className="text-gray-700 leading-relaxed">
            <div className="prose prose-lg max-w-none">
              {company.businessDetails.map((detail: string, index: number) => (
                <p key={index}>{detail}</p>
              ))}
            </div>
          </dd>
        </div>

        <div>
          <dt className="text-lg font-semibold text-gray-900 mb-2">{t('numberOfEmployees')}</dt>
          <dd className="w-full h-px bg-gray-300 mb-3"></dd>
          <dd className="text-gray-700">{company.employeeCount}</dd>
        </div>

        <div>
          <dt className="text-lg font-semibold text-gray-900 mb-2">{t('capital')}</dt>
          <dd className="w-full h-px bg-gray-300 mb-3"></dd>
          <dd className="text-gray-700">{company.capital}</dd>
        </div>

        <div>
          <dt className="text-lg font-semibold text-gray-900 mb-2">{t('amountOfSales')}</dt>
          <dd className="w-full h-px bg-gray-300 mb-3"></dd>
          <dd className="text-gray-700">{company.salesAmount}</dd>
        </div>

        <div>
          <dt className="text-lg font-semibold text-gray-900 mb-2">{t('headquartersLocation')}</dt>
          <dd className="w-full h-px bg-gray-300 mb-3"></dd>
          <dd className="text-gray-700">
            <span className="block mb-4">
              {company.headquarters.name}: {company.headquarters.address}
            </span>
            <div className="w-full h-64 border-0 rounded-lg overflow-hidden">
              <iframe
                src={company.headquarters.mapUrl}
                className="w-full h-full"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </dd>
        </div>

        <div>
          <dt className="text-lg font-semibold text-gray-900 mb-2">{t('branchOfficeLocation')}</dt>
          <dd className="w-full h-px bg-gray-300 mb-3"></dd>
          <dd className="text-gray-700">
            <div className="space-y-6">
              {company.branchOffices.map((office, index: number) => (
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
          <dt className="text-lg font-semibold text-gray-900 mb-2">{t('corporateSite')}</dt>
          <dd className="w-full h-px bg-gray-300 mb-3"></dd>
          <dd className="text-gray-700">
            <a
              href={company.corporateSite}
              target="_blank"
              rel="noreferrer"
              className="text-orange-600 hover:text-orange-700 underline"
            >
              {company.corporateSite}
            </a>
          </dd>
        </div>
      </dl>
    </div>
  );
}
