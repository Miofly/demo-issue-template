/** 测试用列 */
/**
  const testEmitter = Mitt();
	testEmitter.on('foo', (params) => {
			console.log(params, 888);
		}
 );
 testEmitter.on('foo', () => {
			console.log(6666);
		}
 );

 testEmitter.on('*',
 (type, e) => console.log('通配符注册事件除服', type, e),);

 testEmitter.emit('foo', { a: 1, b: 2, c: 3 });
 // testEmitter.emit('*', 333);

 console.log(testEmitter);
 */
/**
 * copy to https://github.com/developit/mitt
 * Expand clear method
 */
/** 事件类型的 type */
export type EventType = string | symbol;

// An event handler can take an optional event argument
// and should not return a value
/**
 * @description 事件处理函数的 type 没有返回值
 * @author wfd
 * @date 2021-07-20 18:52:32
 * @param event 事件处理的参数
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type Handler<T = any> = (event?: any) => void;
/**
 * @description type类型为通配符 * 的 hander 处理
 * @author wfd
 * @date 2021-07-21 13:35:16
 * @param type 事件的类型
 * @param event 事件的参数
 */
export type WildcardHandler = (type: EventType, event?: any) => void;

// An array of all currently registered event handlers for a type
/**
 * @description 事件处理函数的集合类型
 * @author wfd
 * @date 2021-07-20 18:54:14
 * @param Array<Handler<T>> 代表是一个没有返回值多方法的数组集合，
 */
export type EventHandlerList = Array<Handler>;
export type WildCardEventHandlerList = Array<WildcardHandler>;

// A map of event types and their corresponding event handlers.
export type EventHandlerMap = Map<EventType, EventHandlerList | WildCardEventHandlerList>;

export interface Emitter {
  all: EventHandlerMap;

  on<T = any>(type: EventType, handler: Handler<T>): void;
  on(type: '*', handler: WildcardHandler): void;

  off<T = any>(type: EventType, handler: Handler<T>): void;
  off(type: '*', handler: WildcardHandler): void;

  emit<T = any>(type: EventType, event?: T): void;
  emit(type: '*', event?: any): void;
  clear(): void;
}

/**
 * Mitt: Tiny (~200b) functional event emitter / pubsub.
 * @name mitt
 * @returns {Mitt}
 */
/**
 * @description 实现事件发射器接口
 * 第三方库：mitt: https://github.com/developit/mitt/blob/main/src/index.ts
 * 用来替代 vue2 中 $on，$off 和 $once 实例方法，vue2 已移除，应用实例不再实现事件触发接口。
 *
 * Events 相当于泛型 T
 * Record<EventType, unknown> 相当于一个对象 键的类型是：EventType 值的类型是 unknown
 * @author wfd
 * @date 2021-07-20 09:24:53
 * @param {Array} [all] 注册处理程序函数的可选事件名称数组
 * @returns {Function} 函数的实例
 */
export const mitt = (all?: EventHandlerMap): Emitter => {
  all = all || new Map();

  return {
    /**
     * A Map of event names to registered handler functions.
     */
    all,

    /**
     * Register an event handler for the given type.
     * @param {string|symbol} type Type of event to listen for, or `"*"` for all events
     * @param {Function} handler Function to call in response to given event
     * @memberOf mitt
     */
    /**
     * @description 为给定类型注册一个事件
     * @author wfd
     * @date 2021-07-21 13:18:12
     * @param type 指定的类型 为 * 代表所有事件都会触发
     * @param handler 指定的事件
     */
    on<T = any>(type: EventType, handler: Handler<T>) {
      const handlers = all?.get(type);
      const added = handlers && handlers.push(handler);
      if (!added) {
        all?.set(type, [handler]);
      }
    },

    /**
     * Remove an event handler for the given type.
     * @param {string|symbol} type Type of event to unregister `handler` from, or `"*"`
     * @param {Function} handler Handler function to remove
     * @memberOf mitt
     */
    off<T = any>(type: EventType, handler: Handler<T>) {
      const handlers = all?.get(type);
      if (handlers) {
        // 右移运算符，正数右移 返回原值，负数右移，变正数； 这里indexOf 即使返回-1， -1>>>0 = 4294967295
        // 这种写法，我写的话，无脑就上if 了，哪有这个高级， 感叹！！！
        handlers.splice(handlers.indexOf(handler) >>> 0, 1);
      }
    },

    /**
     * Invoke all handlers for the given type.
     * If present, `"*"` handlers are invoked after type-matched handlers.
     *
     * Note: Manually firing "*" handlers is not supported.
     *
     * @param {string|symbol} type The event type to invoke
     * @param {Any} [evt] Any value (object is recommended and powerful), passed to each handler
     * @memberOf mitt
     */
    emit<T = any>(type: EventType, evt: T) {
      ((all?.get(type) || []) as EventHandlerList).slice().map((handler) => {
        handler(evt);
      });
      ((all?.get('*') || []) as WildCardEventHandlerList).slice().map((handler) => {
        handler(type, evt);
      });
    },

    /**
     * Clear all
     */
    clear() {
      this.all.clear();
    }
  };
};
