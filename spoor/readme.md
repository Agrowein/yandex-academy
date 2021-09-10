5. Сломаная спырка
Марсианин Эстер отвеляет музом, который состоит из копитов. Чтобы запатить муз, его нужно спырсить. Результат спырки содержит момсы копитов в правильном порядке. Эстер установил для спырки муза специальный npm пакет.

Оказалось, что в коде npm пакета есть баги и на тестовых данных он выдает неверный результат. Пожалуйста, помогите Эстеру починить их, чтобы успешно спырсить муз!

Примечания
Скачайте код для выполнения спырки. В качестве решения предоставьте версию этого кода с исправленными ошибками.

Тестовые данные
Пример 1
Ввод	Вывод
[
  {
    "om": "SVKbtj",
    "moms": "uYkCFh",
    "pops": [
      "PpYWzC",
      "dfkUeN"
    ]
  },
  {
    "om": "PpYWzC",
    "moms": "TfzCpD",
    "pops": [
      "fEXMpe",
      "dfkUeN"
    ]
  },
  {
    "om": "fEXMpe",
    "moms": "qFAngG"
  },
  {
    "om": "dfkUeN",
    "moms": "qUAMjy"
  },
  {
    "om": "DnLHEG",
    "moms": "EycUXu",
    "pops": [
      "PpYWzC",
      "SVKbtj"
    ]
  }
]
qFAngGqUAMjyTfzCpDuYkCFhEycUXu
Пример 2
Ввод	Вывод
[
  {
    "om": "SVKbtj",
    "moms": "uYkCFh",
    "pops": [
      "PpYWzC",
      {
        "om": "dfkUeN",
        "moms": "qUAMjy"
      }
    ]
  },
  {
    "om": "fEXMpe",
    "moms": "qFAngG"
  },
  {
    "om": "DnLHEG",
    "moms": "EycUXu",
    "pops": [
      {
        "om": "PpYWzC",
        "moms": "TfzCpD",
        "pops": [
          "fEXMpe",
          "dfkUeN"
        ]
      },
      "SVKbtj"
    ]
  }
]
qFAngGqUAMjyTfzCpDuYkCFhEycUXu
Пример 3
Ввод	Вывод
[
  {
    "om": "SVKbtj",
    "moms": "uYkCFh",
    "pops": [
      "PpYWzC",
      "dfkUeN"
    ]
  },
  {
    "om": "PpYWzC",
    "moms": "TfzCpD",
    "pops": [
      {
        "om": "fEXMpe",
        "moms": "qFAngG"
      },
      "dfkUeN"
    ]
  },
  {
    "om": "dfkUeN",
    "moms": "qUAMjy",
    "pops": [
      {
        "om": "DnLHEG",
        "moms": "EycUXu",
        "pops": [
          "PpYWzC",
          "SVKbtj"
        ]
      }
    ]
  }
]
ShkaQCnErbKZdqsjX
Пример 4
Ввод	Вывод
[
  {
    "om": "SVKbtj",
    "moms": "uYkCFh",
    "pops": [
      "PpYWzC",
      "dfkUeN"
    ]
  },
  {
    "om": "PpYWzC",
    "moms": "TfzCpD"
  },
  {
    "om": "DnLHEG",
    "moms": "EycUXu",
    "pops": [
      "PpYWzC",
      "SVKbtj"
    ]
  }
]
GTjkzarWpDEcLegKy-dfkUeN
Пример 5
Ввод	Вывод
[
  {
    "om": "SVKbtj",
    "moms": "uYkCFh",
    "pops": [
      {
        "om": "PpYWzC",
        "moms": "TfzCpD"
      },
      "dfkUeN"
    ]
  },
  {
    "om": "PpYWzC",
    "moms": "TfzCpD"
  },
  {
    "om": "DnLHEG",
    "moms": "EycUXu",
    "pops": [
      "PpYWzC",
      "SVKbtj"
    ]
  }
]