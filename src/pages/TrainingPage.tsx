import { useState } from 'react';

export interface TrainingAnswer {
  id: number;
  answer: string;
}

export interface TrainingQuestion {
  id: number;
  question: string;
  type: "single" | "multiple";
  image_url: string;
  answers: TrainingAnswer[];
}

const data = {
  "test_questions": [
    {
      "id": 1,
      "question": "Какую основную задачу решает приложение?",
      "type": "single",
      "image_url": "https://admin.dev.inspectorpharm.ru/uploads/2025/04/21/side-view-woman-using-mobile-phone-while-sitting-bed-home-1048944-16264918-6806467df2b663.45570480.jpg",
      "answers": [
        {
          "id": 17,
          "answer": "Упрощает покупку лекарств онлайн"
        },
        {
          "id": 18,
          "answer": "Помогает пользователям искать работу в аптеках"
        },
        {
          "id": 19,
          "answer": "Позволяет пользователям выполнять задания от аптек и получать за это вознаграждение"
        },
        {
          "id": 20,
          "answer": "Отслеживает состояние здоровья пользователей"
        }
      ]
    },
    {
      "id": 2,
      "question": "Какие типы заданий можно выполнять в приложении?",
      "type": "multiple",
      "image_url": "https://admin.dev.inspectorpharm.ru/uploads/2025/04/21/side-view-woman-using-mobile-phone-while-sitting-bed-home-1048944-16264918-6806467df2b663.45570480.jpg",
      "answers": [
        {
          "id": 21,
          "answer": "Проверка наличия определённых препаратов"
        },
        {
          "id": 22,
          "answer": "Проведение онлайн-консультаций для пациентов"
        },
        {
          "id": 23,
          "answer": "Подсчёт количества упаковок на полке"
        },
        {
          "id": 24,
          "answer": "Прикрепление фотографий лекарств и аптек"
        },
        {
          "id": 25,
          "answer": "Разработка новых лекарств"
        }
      ]
    },
    {
      "id": 4,
      "question": "Какие функции доступны пользователю на карте заданий?",
      "type": "multiple",
      "image_url": null,
      "answers": [
        {
          "id": 26,
          "answer": "Просмотр заданий в конкретных районах"
        },
        {
          "id": 27,
          "answer": "Создание своих заданий"
        },
        {
          "id": 28,
          "answer": "Фильтрация по расстоянию и типу задания"
        },
        {
          "id": 29,
          "answer": "Навигация до аптеки"
        },
        {
          "id": 30,
          "answer": "Общение с другими исполнителями прямо на карте"
        }
      ]
    },
    {
      "id": 5,
      "question": "Кто является целевой аудиторией приложения?",
      "type": "single",
      "image_url": null,
      "answers": [
        {
          "id": 31,
          "answer": "Люди, желающие подработать"
        },
        {
          "id": 32,
          "answer": "Аптеки и фармкомпании"
        },
        {
          "id": 33,
          "answer": "Пациенты, ищущие редкие лекарства"
        },
        {
          "id": 34,
          "answer": "Разработчики медицинских приложений"
        },
        {
          "id": 35,
          "answer": "Люди, часто передвигающиеся по городу"
        }
      ]
    },
    {
      "id": 6,
      "question": "Какие возможности предоставляет интерфейс выполнения задания?",
      "type": "multiple",
      "image_url": null,
      "answers": [
        {
          "id": 36,
          "answer": "Встроенная камера с подсказками для фото"
        },
        {
          "id": 37,
          "answer": "Возможность редактировать информацию о задании"
        },
        {
          "id": 38,
          "answer": "Отправка задания после выполнения"
        },
        {
          "id": 39,
          "answer": "Получение мгновенной оплаты на карту"
        },
        {
          "id": 40,
          "answer": "Возможность редактировать информацию о задании"
        }
      ]
    }
  ]
};

const TrainingPage = () => {
  const [isStarted, setIsStarted] = useState(false);

  const handleStartTraining = () => {
    setIsStarted(true);
    // Add your training logic here
    setTimeout(() => {
      setIsStarted(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <button
        onClick={handleStartTraining}
        disabled={isStarted}
        className={`
          px-8 py-4 text-lg font-medium rounded-lg shadow-lg transform transition-all
          ${isStarted
            ? 'bg-green-500 text-white scale-95'
            : 'bg-blue-600 text-white hover:bg-blue-700 hover:scale-105'}
        `}
      >
        {isStarted ? 'Training...' : 'Start Training'}
      </button>
    </div>
  );
};

export default TrainingPage; 
