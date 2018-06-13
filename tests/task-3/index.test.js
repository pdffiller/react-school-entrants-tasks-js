import Emitter from '../../task-3';

describe('Task 3 - Emitter implements "Publish-Subscribe" pattern', () => {
  test('new Emitter() should create an instance of Emitter', () => {
    expect(
      new Emitter
    ).toBeInstanceOf(Emitter);
  });

  test('emitter should work with single event and single handler', () => {
    const handler = jest.fn();
    const data = {};
    const emitter = new Emitter();
    emitter.on('event', handler);
    emitter.emit('event', data);
    expect(handler.mock.calls[0][0]).toBe(data);
  });

  test('emitter should work with single event and multiple handlers', () => {
    const handler1 = jest.fn();
    const handler2 = jest.fn();
    const handler3 = jest.fn();
    const data = {};
    const emitter = new Emitter();
    emitter.on('event', handler1);
    emitter.on('event', handler2);
    emitter.on('event', handler3);
    emitter.emit('event', data);
    expect(handler1.mock.calls[0][0]).toBe(data);
    expect(handler2.mock.calls[0][0]).toBe(data);
    expect(handler3.mock.calls[0][0]).toBe(data);
  });

  test('emitter should work with multiple events and single handler', () => {
    const handler = jest.fn();
    const data = [{}, {}, {}];
    const emitter = new Emitter();
    emitter.on('event-1', handler);
    emitter.on('event-2', handler);
    emitter.on('event-3', handler);
    emitter.emit('event-1', data[0]);
    emitter.emit('event-2', data[1]);
    emitter.emit('event-3', data[2]);
    expect(handler.mock.calls[0][0]).toBe(data[0]);
    expect(handler.mock.calls[1][0]).toBe(data[1]);
    expect(handler.mock.calls[2][0]).toBe(data[2]);
  });

  test('emitter should not call handler if triggered not binded event', () => {
    const handler = jest.fn();
    const data = {};
    const emitter = new Emitter();
    emitter.on('event', handler);
    emitter.emit('other-event', data);
    expect(handler.mock.calls.length).toBe(0);
  });
});