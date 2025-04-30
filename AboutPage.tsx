import React, { useState } from 'react'
import type { ReactNode, FC } from 'react'

type Tab = 'FAQ' | 'Документы'

// Тип элемента FAQ
interface FaqItem {
  q: string
  a?: string
}

// Данные FAQ
const faqItems: FaqItem[] = [
  { q: 'Как запустить миссию?' },
  { q: 'Как открыть карту?' },
  {
    q: 'Как завершить миссию?',
    a: 'Зайдите в соответствующий раздел и нажмите на кнопку “Завершить миссию”.',
  },
  { q: 'Как узнать дату окончания миссии?' },
  { q: 'Как узнать название аптеки?' },
  {
    q: 'Контактные данные',
    a: 'Номер телефона: 8-800-000-00-00\nПочта: mail@domain.com\nВерсия приложения 1.01 (01)',
  },
]

// Данные документов
const docsList: string[] = [
  'Согласие на обработку данных',
  'Оферта',
  'Согласие на получение информационных и маркетинговых сообщений',
]

// Главный компонент страницы
const AboutPage: FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('FAQ')

  return (
    <div className="pt-4 pb-20 bg-white min-h-full">
      {/* Заголовок */}
      <h1 className="px-4 text-lg font-semibold text-gray-800">О приложении</h1>

      {/* Вкладки */}
      <div className="flex px-4 mt-3 border-b border-gray-200">
        {(['FAQ', 'Документы'] as Tab[]).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={
              `mr-6 pb-2 text-sm font-medium ${
                activeTab === tab
                  ? 'text-orange-500 border-b-2 border-orange-500'
                  : 'text-gray-500 hover:text-gray-700'
              }`
            }
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Контент */}
      <div className="mt-2 px-4">
        {activeTab === 'FAQ' ? <Faq /> : <Documents />}
      </div>
    </div>
  )
}

export default AboutPage

// ---------------------------------------------------------------------------
// Компонент FAQ
const Faq: FC = () => (
  <div>
    {faqItems.map((item, idx) => (
      <AccordionItem key={idx} title={item.q}>
        {item.a && (
          <p className="text-sm text-gray-600 whitespace-pre-line mt-1">
            {item.a}
          </p>
        )}
      </AccordionItem>
    ))}
  </div>
)

// ---------------------------------------------------------------------------
// Компонент списка документов
const Documents: FC = () => (
  <div>
    {docsList.map((doc, idx) => (
      <button
        key={idx}
        className="w-full flex items-center justify-start py-4 border-b border-gray-200 text-base text-gray-800 hover:bg-gray-50"
      >
        {idx === 2 ? (
          <div className="text-left">
            <span>Согласие</span>
            <span className="block">на получение информационных и маркетинговых сообщений</span>
          </div>
        ) : (
          <span className="">{doc}</span>
        )}
      </button>
    ))}
  </div>
)

// ---------------------------------------------------------------------------
// Аккордеон-элемент
interface AccordionItemProps {
  title: string
  children?: ReactNode
}

const AccordionItem: FC<AccordionItemProps> = ({ title, children }) => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <div className="border-b border-gray-200">
      <button
        type="button"
        onClick={() => setOpen(prev => !prev)}
        className="w-full flex items-center py-4"
      >
        <span className="text-base text-gray-800">{title}</span>
      </button>
      {open && <div className="pb-4">{children}</div>}
    </div>
  )
}
