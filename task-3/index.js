class Emitter {
  
  /**
   * Создает экземпляр класса Emitter.
   * @memberof Emitter
   */
  constructor() {
    // Ваш код
  }

  /**
   * связывает обработчик с событием
   *
   * @param {String} event - событие
   * @param {Function} handler - обработчик
   * @memberof Emitter
   */
  on(event, handler) {
    // Ваш код
  }

  /**
   * Генерирует событие -- вызывает все обработчики, связанные с событием и
   *                       передает им аргумент data
   *
   * @param {String} event
   * @param {*} data
   * @memberof Emitter
   */
  emit(event, data) {
    // Ваш код
  }
}

export default Emitter;
