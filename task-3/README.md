# Задание 3. Реализовать шаблон проектирования `Publish-Subscribe`.

Необходимо создать класс Emitter, реализующий шаблон `Publish-Subscribe`, и содержащий
два метода:

  * `on(event, handler)` - связывает обработчик `handler` с событием `event`
  * `emit(event, data)` - генерирует событие `event`, вызывает все обработчики, 
  связанные с этим событием (если такие есть) и передает им в качестве аргумента `data`

## Например:

```js
import Emitter from './Emitter';

const emitter = new Emitter();

emitter.on('connect', data => {
  console.log('We have been connected to', data);
});

emitter.on('disconnect', data => {
  console.log('We disconnected from', data);
});

emitter.emit('connect', 'http-server');
// prints to console:
// > We have been connected to http-server
emitter.emit('connect', 'websocket');
// prints to console:
// > We have been connected to websocket

emitter.emit('disconnect', 'websocket');
// prints to console:
// > We disconnected from websocket
emitter.emit('disconnect', 'http-server');
// prints to console:
// > We disconnected from http-server
```
