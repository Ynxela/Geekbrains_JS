"use strict";

/**
 * Объект с настройками игры.
 * @property {int} rowsCount - Количество строк в карте.
 * @property {int} colsCount - Количество колонок в карте.
 * @property {int} startPositionX - Начальная позиция игрока по X координате.
 * @property {int} startPositionY - Начальная позиция игрока по Y координате.
 * @property {string} startDirection - Начальное направление игрока.
 * @property {number} stepsInSecond - Шагов в секунду.
 * @property {string} playerCellColor - Цвет ячейки игрока.
 * @property {string} emptyCellColor - Цвет пустой ячейки.
 */
const settings = {
    rowsCount: 10,
    colsCount: 10,
    blackField: '#888',
};


const chess = {
    settings,

    chessBoard: document.getElementById("game"),

    initCells() {
        const rows = [0, 8, 7, 6, 5, 4, 3, 2, 1, 0];
        const cols = [0, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 0];

        for (let row = 0; row < this.settings.rowsCount; row++) {
            // Создаем новую строку.
            const trElem = document.createElement('tr');
            // Добавляем строку в контейнер с игрой.
            this.chessBoard.appendChild(trElem);
            // В каждой строке пробегаемся по циклу столько раз, сколько у нас колонок.
            for (let col = 0; col < this.settings.colsCount; col++) {
                // Создаем ячейку.
                const tdElem = document.createElement('td');
                // Добавляем ячейку в текущую строку.
                trElem.appendChild(tdElem);

                if (rows[row] === 0 && cols[col] !== 0) {
                    tdElem.innerHTML = cols[col];
                }

                if (rows[row] !== 0 && cols[col] === 0) {
                    tdElem.innerHTML = rows[row];
                }

                if (rows[row] !== 0 && cols[col] !== 0 && col % 2 !== 0 && row % 2 !== 0) {
                    tdElem.style.backgroundColor = this.settings.blackField;
                }

                if (rows[row] !== 0 && cols[col] !== 0 && col % 2 == 0 && row % 2 == 0) {
                    tdElem.style.backgroundColor = this.settings.blackField;
                }
            }
        }
    },
}

chess.initCells();
