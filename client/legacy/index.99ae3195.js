import { i as is_function, g as get_store_value, w as writable$1, n as noop, r as run_all, _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, d as init, s as safe_not_equal, e as _assertThisInitialized, f as dispatch_dev, h as _createClass, S as SvelteComponentDev, v as validate_each_argument, j as create_slot, k as createEventDispatcher, l as validate_slots, m as element, t as text, o as space, p as claim_element, q as children, u as claim_text, x as detach_dev, y as claim_space, z as attr_dev, A as toggle_class, B as add_location, C as insert_dev, D as append_dev, E as listen_dev, F as set_data_dev, G as _slicedToArray, H as update_slot, I as transition_in, J as transition_out, K as destroy_each, L as afterUpdate, M as beforeUpdate, N as onMount, O as validate_each_keys, P as create_component, Q as query_selector_all, R as claim_component, T as set_input_value, U as mount_component, V as prevent_default, W as prop_dev, X as destroy_component, Y as _toConsumableArray, Z as fix_position, $ as add_transform, a0 as create_animation, a1 as add_render_callback, a2 as create_bidirectional_transition, a3 as empty, a4 as group_outros, a5 as update_keyed_each, a6 as check_outros, a7 as fix_and_outro_and_destroy_block } from './client.e919e880.js';

function cubicOut(t) {
  var f = t - 1.0;
  return f * f * f + 1.0;
}

function fly(node, _ref3) {
  var _ref3$delay = _ref3.delay,
      delay = _ref3$delay === void 0 ? 0 : _ref3$delay,
      _ref3$duration = _ref3.duration,
      duration = _ref3$duration === void 0 ? 400 : _ref3$duration,
      _ref3$easing = _ref3.easing,
      easing = _ref3$easing === void 0 ? cubicOut : _ref3$easing,
      _ref3$x = _ref3.x,
      x = _ref3$x === void 0 ? 0 : _ref3$x,
      _ref3$y = _ref3.y,
      y = _ref3$y === void 0 ? 0 : _ref3$y,
      _ref3$opacity = _ref3.opacity,
      opacity = _ref3$opacity === void 0 ? 0 : _ref3$opacity;
  var style = getComputedStyle(node);
  var target_opacity = +style.opacity;
  var transform = style.transform === 'none' ? '' : style.transform;
  var od = target_opacity * (1 - opacity);
  return {
    delay: delay,
    duration: duration,
    easing: easing,
    css: function css(t, u) {
      return "\n\t\t\ttransform: ".concat(transform, " translate(").concat((1 - t) * x, "px, ").concat((1 - t) * y, "px);\n\t\t\topacity: ").concat(target_opacity - od * u);
    }
  };
}

function flip(node, animation, params) {
  var style = getComputedStyle(node);
  var transform = style.transform === 'none' ? '' : style.transform;
  var scaleX = animation.from.width / node.clientWidth;
  var scaleY = animation.from.height / node.clientHeight;
  var dx = (animation.from.left - animation.to.left) / scaleX;
  var dy = (animation.from.top - animation.to.top) / scaleY;
  var d = Math.sqrt(dx * dx + dy * dy);
  var _params$delay = params.delay,
      delay = _params$delay === void 0 ? 0 : _params$delay,
      _params$duration = params.duration,
      duration = _params$duration === void 0 ? function (d) {
    return Math.sqrt(d) * 120;
  } : _params$duration,
      _params$easing = params.easing,
      easing = _params$easing === void 0 ? cubicOut : _params$easing;
  return {
    delay: delay,
    duration: is_function(duration) ? duration(d) : duration,
    easing: easing,
    css: function css(_t, u) {
      return "transform: ".concat(transform, " translate(").concat(u * dx, "px, ").concat(u * dy, "px);");
    }
  };
}

function isSimpleDeriver(deriver) {
  return deriver.length < 2;
}

function generator(storage) {
  /**
   * Creates a `Readable` store that allows reading by subscription.
   * @param key storage key
   * @param value initial value
   * @param {StartStopNotifier}start start and stop notifications for subscriptions
   */
  function readable(key, value, start) {
    return {
      subscribe: writable(key, value, start).subscribe
    };
  }
  /**
   * Create a `Writable` store that allows both updating and reading by subscription.
   * @param key storage key
   * @param {*=}value default value
   * @param {StartStopNotifier=}start start and stop notifications for subscriptions
   */


  function writable(key, value) {
    var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : noop;

    function wrap_start(ogSet) {
      return start(function wrap_set(new_value) {
        if (storage) {
          storage.setItem(key, JSON.stringify(new_value));
        }

        return ogSet(new_value);
      });
    }

    if (storage) {
      if (storage.getItem(key)) {
        value = JSON.parse(storage.getItem(key));
      }

      storage.setItem(key, JSON.stringify(value));
    }

    var ogStore = writable$1(value, start ? wrap_start : undefined);

    function set(new_value) {
      if (storage) {
        storage.setItem(key, JSON.stringify(new_value));
      }

      ogStore.set(new_value);
    }

    function update(fn) {
      set(fn(get_store_value(ogStore)));
    }

    function subscribe(run) {
      var invalidate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
      return ogStore.subscribe(run, invalidate);
    }

    return {
      set: set,
      update: update,
      subscribe: subscribe
    };
  }
  /**
   * Derived value store by synchronizing one or more readable stores and
   * applying an aggregation function over its input values.
   * @param key storage key
   * @param {Stores} stores input stores
   * @param {function(Stores=, function(*)=):*}fn function callback that aggregates the values
   * @param {*=}initial_value when used asynchronously
   */


  function derived(key, stores, fn, initial_value) {
    var single = !Array.isArray(stores);
    var stores_array = single ? [stores] : stores;

    if (storage && storage.getItem(key)) {
      initial_value = JSON.parse(storage.getItem(key));
    }

    return readable(key, initial_value, function (set) {
      var inited = false;
      var values = [];
      var pending = 0;
      var cleanup = noop;

      var sync = function sync() {
        if (pending) {
          return;
        }

        cleanup();
        var input = single ? values[0] : values;

        if (isSimpleDeriver(fn)) {
          set(fn(input));
        } else {
          var result = fn(input, set);
          cleanup = is_function(result) ? result : noop;
        }
      };

      var unsubscribers = stores_array.map(function (store, i) {
        return store.subscribe(function (value) {
          values[i] = value;
          pending &= ~(1 << i);

          if (inited) {
            sync();
          }
        }, function () {
          pending |= 1 << i;
        });
      });
      inited = true;
      sync();
      return function stop() {
        run_all(unsubscribers);
        cleanup();
      };
    });
  }

  return {
    readable: readable,
    writable: writable,
    derived: derived,
    get: get_store_value
  };
}

var storage = typeof window !== 'undefined' ? window.localStorage : undefined;

var _generator = generator(storage),
    readable = _generator.readable,
    writable = _generator.writable,
    derived = _generator.derived;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src\\components\\shared\\Tabs.svelte";

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[6] = list[i];
  return child_ctx;
} // (13:4) {#each sorts as sort}


function create_each_block(ctx) {
  var li;
  var div;
  var t0_value =
  /*sort*/
  ctx[6] + "";
  var t0;
  var t1;
  var mounted;
  var dispose;

  function click_handler() {
    var _ctx;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (
      /*click_handler*/
      (_ctx = ctx)[5].apply(_ctx, [
      /*sort*/
      ctx[6]].concat(args))
    );
  }

  var block = {
    c: function create() {
      li = element("li");
      div = element("div");
      t0 = text(t0_value);
      t1 = space();
      this.h();
    },
    l: function claim(nodes) {
      li = claim_element(nodes, "LI", {
        class: true
      });
      var li_nodes = children(li);
      div = claim_element(li_nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      t0 = claim_text(div_nodes, t0_value);
      div_nodes.forEach(detach_dev);
      t1 = claim_space(li_nodes);
      li_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "svelte-1p14tjs");
      toggle_class(div, "active",
      /*sort*/
      ctx[6] ===
      /*activeSort*/
      ctx[1]);
      add_location(div, file, 14, 8, 336);
      attr_dev(li, "class", "svelte-1p14tjs");
      add_location(li, file, 13, 6, 278);
    },
    m: function mount(target, anchor) {
      insert_dev(target, li, anchor);
      append_dev(li, div);
      append_dev(div, t0);
      append_dev(li, t1);

      if (!mounted) {
        dispose = listen_dev(li, "click", click_handler, false, false, false);
        mounted = true;
      }
    },
    p: function update(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty &
      /*sorts*/
      1 && t0_value !== (t0_value =
      /*sort*/
      ctx[6] + "")) set_data_dev(t0, t0_value);

      if (dirty &
      /*sorts, activeSort*/
      3) {
        toggle_class(div, "active",
        /*sort*/
        ctx[6] ===
        /*activeSort*/
        ctx[1]);
      }
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(li);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(13:4) {#each sorts as sort}",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var div1;
  var ul;
  var t;
  var div0;
  var current;
  var each_value =
  /*sorts*/
  ctx[0];
  validate_each_argument(each_value);
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  var default_slot_template =
  /*$$slots*/
  ctx[4].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[3], null);
  var block = {
    c: function create() {
      div1 = element("div");
      ul = element("ul");

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      t = space();
      div0 = element("div");
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      div1 = claim_element(nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      ul = claim_element(div1_nodes, "UL", {
        class: true
      });
      var ul_nodes = children(ul);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].l(ul_nodes);
      }

      ul_nodes.forEach(detach_dev);
      t = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", {});
      var div0_nodes = children(div0);
      if (default_slot) default_slot.l(div0_nodes);
      div0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(ul, "class", "svelte-1p14tjs");
      add_location(ul, file, 11, 2, 241);
      add_location(div0, file, 18, 2, 423);
      attr_dev(div1, "class", "tabs svelte-1p14tjs");
      add_location(div1, file, 10, 0, 220);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div1, anchor);
      append_dev(div1, ul);

      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(ul, null);
      }

      append_dev(div1, t);
      append_dev(div1, div0);

      if (default_slot) {
        default_slot.m(div0, null);
      }

      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*dispatch, sorts, activeSort*/
      7) {
        each_value =
        /*sorts*/
        ctx[0];
        validate_each_argument(each_value);

        var _i4;

        for (_i4 = 0; _i4 < each_value.length; _i4 += 1) {
          var child_ctx = get_each_context(ctx, each_value, _i4);

          if (each_blocks[_i4]) {
            each_blocks[_i4].p(child_ctx, dirty);
          } else {
            each_blocks[_i4] = create_each_block(child_ctx);

            each_blocks[_i4].c();

            each_blocks[_i4].m(ul, null);
          }
        }

        for (; _i4 < each_blocks.length; _i4 += 1) {
          each_blocks[_i4].d(1);
        }

        each_blocks.length = each_value.length;
      }

      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope*/
        8) {
          update_slot(default_slot, default_slot_template, ctx,
          /*$$scope*/
          ctx[3], dirty, null, null);
        }
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(default_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div1);
      destroy_each(each_blocks, detaching);
      if (default_slot) default_slot.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  var dispatch = createEventDispatcher();
  var sorts = $$props.sorts;
  var activeSort = $$props.activeSort;
  var writable_props = ["sorts", "activeSort"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Tabs> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Tabs", $$slots, ['default']);

  var click_handler = function click_handler(sort) {
    return dispatch("tabChange", sort);
  };

  $$self.$set = function ($$props) {
    if ("sorts" in $$props) $$invalidate(0, sorts = $$props.sorts);
    if ("activeSort" in $$props) $$invalidate(1, activeSort = $$props.activeSort);
    if ("$$scope" in $$props) $$invalidate(3, $$scope = $$props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      createEventDispatcher: createEventDispatcher,
      dispatch: dispatch,
      sorts: sorts,
      activeSort: activeSort
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("dispatch" in $$props) $$invalidate(2, dispatch = $$props.dispatch);
    if ("sorts" in $$props) $$invalidate(0, sorts = $$props.sorts);
    if ("activeSort" in $$props) $$invalidate(1, activeSort = $$props.activeSort);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [sorts, activeSort, dispatch, $$scope, $$slots, click_handler];
}

var Tabs = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Tabs, _SvelteComponentDev);

  var _super = _createSuper(Tabs);

  function Tabs(options) {
    var _this;

    _classCallCheck(this, Tabs);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      sorts: 0,
      activeSort: 1
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Tabs",
      options: options,
      id: create_fragment.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*sorts*/
    ctx[0] === undefined && !("sorts" in props)) {
      console.warn("<Tabs> was created without expected prop 'sorts'");
    }

    if (
    /*activeSort*/
    ctx[1] === undefined && !("activeSort" in props)) {
      console.warn("<Tabs> was created without expected prop 'activeSort'");
    }

    return _this;
  }

  _createClass(Tabs, [{
    key: "sorts",
    get: function get() {
      throw new Error("<Tabs>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Tabs>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "activeSort",
    get: function get() {
      throw new Error("<Tabs>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Tabs>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Tabs;
}(SvelteComponentDev);

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file$1 = "src\\routes\\index.svelte";

function get_each_context$1(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[17] = list[i];
  child_ctx[18] = list;
  child_ctx[19] = i;
  return child_ctx;
} // (86:2) {:else}


function create_else_block(ctx) {
  var p;
  var t0_value =
  /*leftTodo*/
  ctx[3].length + "";
  var t0;
  var t1;
  var block = {
    c: function create() {
      p = element("p");
      t0 = text(t0_value);
      t1 = text(" tasks left");
      this.h();
    },
    l: function claim(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t0 = claim_text(p_nodes, t0_value);
      t1 = claim_text(p_nodes, " tasks left");
      p_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(p, file$1, 86, 4, 2601);
    },
    m: function mount(target, anchor) {
      insert_dev(target, p, anchor);
      append_dev(p, t0);
      append_dev(p, t1);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*leftTodo*/
      8 && t0_value !== (t0_value =
      /*leftTodo*/
      ctx[3].length + "")) set_data_dev(t0, t0_value);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(p);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_else_block.name,
    type: "else",
    source: "(86:2) {:else}",
    ctx: ctx
  });
  return block;
} // (84:34) 


function create_if_block_2(ctx) {
  var p;
  var t0_value =
  /*leftTodo*/
  ctx[3].length + "";
  var t0;
  var t1;
  var block = {
    c: function create() {
      p = element("p");
      t0 = text(t0_value);
      t1 = text(" task left");
      this.h();
    },
    l: function claim(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t0 = claim_text(p_nodes, t0_value);
      t1 = claim_text(p_nodes, " task left");
      p_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(p, file$1, 84, 4, 2552);
    },
    m: function mount(target, anchor) {
      insert_dev(target, p, anchor);
      append_dev(p, t0);
      append_dev(p, t1);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*leftTodo*/
      8 && t0_value !== (t0_value =
      /*leftTodo*/
      ctx[3].length + "")) set_data_dev(t0, t0_value);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(p);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_2.name,
    type: "if",
    source: "(84:34) ",
    ctx: ctx
  });
  return block;
} // (82:34) 


function create_if_block_1(ctx) {
  var p;
  var t;
  var block = {
    c: function create() {
      p = element("p");
      t = text("Tasks complete");
      this.h();
    },
    l: function claim(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t = claim_text(p_nodes, "Tasks complete");
      p_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(p, file$1, 82, 4, 2491);
    },
    m: function mount(target, anchor) {
      insert_dev(target, p, anchor);
      append_dev(p, t);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(p);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_1.name,
    type: "if",
    source: "(82:34) ",
    ctx: ctx
  });
  return block;
} // (80:2) {#if todos.length === 0}


function create_if_block(ctx) {
  var p;
  var t;
  var block = {
    c: function create() {
      p = element("p");
      t = text("Please add a task");
      this.h();
    },
    l: function claim(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t = claim_text(p_nodes, "Please add a task");
      p_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(p, file$1, 80, 4, 2427);
    },
    m: function mount(target, anchor) {
      insert_dev(target, p, anchor);
      append_dev(p, t);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(p);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block.name,
    type: "if",
    source: "(80:2) {#if todos.length === 0}",
    ctx: ctx
  });
  return block;
} // (91:4) {#each sortTodos as todo (todo.id)}


function create_each_block$1(key_1, ctx) {
  var div;
  var label;
  var span0;
  var t0_value =
  /*todo*/
  ctx[17].text + "";
  var t0;
  var t1;
  var input;
  var input_id_value;
  var t2;
  var span1;
  var t3;
  var span2;
  var t4;
  var t5;
  var div_transition;
  var rect;
  var stop_animation = noop;
  var current;
  var mounted;
  var dispose;

  function input_change_handler() {
    /*input_change_handler*/
    ctx[15].call(input,
    /*todo*/
    ctx[17]);
  }

  function click_handler() {
    var _ctx;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (
      /*click_handler*/
      (_ctx = ctx)[16].apply(_ctx, [
      /*todo*/
      ctx[17]].concat(args))
    );
  }

  var block = {
    key: key_1,
    first: null,
    c: function create() {
      div = element("div");
      label = element("label");
      span0 = element("span");
      t0 = text(t0_value);
      t1 = space();
      input = element("input");
      t2 = space();
      span1 = element("span");
      t3 = space();
      span2 = element("span");
      t4 = text("X");
      t5 = space();
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      label = claim_element(div_nodes, "LABEL", {
        class: true
      });
      var label_nodes = children(label);
      span0 = claim_element(label_nodes, "SPAN", {
        class: true
      });
      var span0_nodes = children(span0);
      t0 = claim_text(span0_nodes, t0_value);
      span0_nodes.forEach(detach_dev);
      t1 = claim_space(label_nodes);
      input = claim_element(label_nodes, "INPUT", {
        id: true,
        type: true,
        name: true,
        class: true
      });
      t2 = claim_space(label_nodes);
      span1 = claim_element(label_nodes, "SPAN", {
        class: true
      });
      children(span1).forEach(detach_dev);
      label_nodes.forEach(detach_dev);
      t3 = claim_space(div_nodes);
      span2 = claim_element(div_nodes, "SPAN", {
        class: true
      });
      var span2_nodes = children(span2);
      t4 = claim_text(span2_nodes, "X");
      span2_nodes.forEach(detach_dev);
      t5 = claim_space(div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span0, "class", "todoText svelte-1a0a1hq");
      toggle_class(span0, "done",
      /*todo*/
      ctx[17].done);
      add_location(span0, file$1, 93, 10, 2885);
      attr_dev(input, "id", input_id_value = "todo-" +
      /*todo*/
      ctx[17].id);
      attr_dev(input, "type", "checkbox");
      attr_dev(input, "name", "todo check");
      attr_dev(input, "class", "svelte-1a0a1hq");
      add_location(input, file$1, 94, 10, 2960);
      attr_dev(span1, "class", "checkmark svelte-1a0a1hq");
      add_location(span1, file$1, 95, 10, 3059);
      attr_dev(label, "class", "container svelte-1a0a1hq");
      add_location(label, file$1, 92, 8, 2849);
      attr_dev(span2, "class", "delete svelte-1a0a1hq");
      add_location(span2, file$1, 97, 8, 3111);
      attr_dev(div, "class", "task svelte-1a0a1hq");
      add_location(div, file$1, 91, 6, 2747);
      this.first = div;
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, label);
      append_dev(label, span0);
      append_dev(span0, t0);
      append_dev(label, t1);
      append_dev(label, input);
      input.checked =
      /*todo*/
      ctx[17].done;
      append_dev(label, t2);
      append_dev(label, span1);
      append_dev(div, t3);
      append_dev(div, span2);
      append_dev(span2, t4);
      append_dev(div, t5);
      current = true;

      if (!mounted) {
        dispose = [listen_dev(input, "change", input_change_handler), listen_dev(span2, "click", click_handler, false, false, false)];
        mounted = true;
      }
    },
    p: function update(new_ctx, dirty) {
      ctx = new_ctx;
      if ((!current || dirty &
      /*sortTodos*/
      16) && t0_value !== (t0_value =
      /*todo*/
      ctx[17].text + "")) set_data_dev(t0, t0_value);

      if (dirty &
      /*sortTodos*/
      16) {
        toggle_class(span0, "done",
        /*todo*/
        ctx[17].done);
      }

      if (!current || dirty &
      /*sortTodos*/
      16 && input_id_value !== (input_id_value = "todo-" +
      /*todo*/
      ctx[17].id)) {
        attr_dev(input, "id", input_id_value);
      }

      if (dirty &
      /*sortTodos*/
      16) {
        input.checked =
        /*todo*/
        ctx[17].done;
      }
    },
    r: function measure() {
      rect = div.getBoundingClientRect();
    },
    f: function fix() {
      fix_position(div);
      stop_animation();
      add_transform(div, rect);
    },
    a: function animate() {
      stop_animation();
      stop_animation = create_animation(div, rect, flip, {
        duration: 350
      });
    },
    i: function intro(local) {
      if (current) return;
      add_render_callback(function () {
        if (!div_transition) div_transition = create_bidirectional_transition(div, fly, {
          x: 50,
          duration: 350
        }, true);
        div_transition.run(1);
      });
      current = true;
    },
    o: function outro(local) {
      if (!div_transition) div_transition = create_bidirectional_transition(div, fly, {
        x: 50,
        duration: 350
      }, false);
      div_transition.run(0);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
      if (detaching && div_transition) div_transition.end();
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block$1.name,
    type: "each",
    source: "(91:4) {#each sortTodos as todo (todo.id)}",
    ctx: ctx
  });
  return block;
} // (90:2) <Tabs {activeSort} {sorts} on:tabChange={tabChange}>


function create_default_slot(ctx) {
  var each_blocks = [];
  var each_1_lookup = new Map();
  var each_1_anchor;
  var current;
  var each_value =
  /*sortTodos*/
  ctx[4];
  validate_each_argument(each_value);

  var get_key = function get_key(ctx) {
    return (
      /*todo*/
      ctx[17].id
    );
  };

  validate_each_keys(ctx, each_value, get_each_context$1, get_key);

  for (var i = 0; i < each_value.length; i += 1) {
    var child_ctx = get_each_context$1(ctx, each_value, i);
    var key = get_key(child_ctx);
    each_1_lookup.set(key, each_blocks[i] = create_each_block$1(key, child_ctx));
  }

  var block = {
    c: function create() {
      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      each_1_anchor = empty();
    },
    l: function claim(nodes) {
      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].l(nodes);
      }

      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(target, anchor);
      }

      insert_dev(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*deleteItem, sortTodos*/
      144) {
        var _each_value =
        /*sortTodos*/
        ctx[4];
        validate_each_argument(_each_value);
        group_outros();

        for (var _i4 = 0; _i4 < each_blocks.length; _i4 += 1) {
          each_blocks[_i4].r();
        }

        validate_each_keys(ctx, _each_value, get_each_context$1, get_key);
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, _each_value, each_1_lookup, each_1_anchor.parentNode, fix_and_outro_and_destroy_block, create_each_block$1, each_1_anchor, get_each_context$1);

        for (var _i5 = 0; _i5 < each_blocks.length; _i5 += 1) {
          each_blocks[_i5].a();
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;

      for (var _i6 = 0; _i6 < each_value.length; _i6 += 1) {
        transition_in(each_blocks[_i6]);
      }

      current = true;
    },
    o: function outro(local) {
      for (var _i7 = 0; _i7 < each_blocks.length; _i7 += 1) {
        transition_out(each_blocks[_i7]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      for (var _i8 = 0; _i8 < each_blocks.length; _i8 += 1) {
        each_blocks[_i8].d(detaching);
      }

      if (detaching) detach_dev(each_1_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot.name,
    type: "slot",
    source: "(90:2) <Tabs {activeSort} {sorts} on:tabChange={tabChange}>",
    ctx: ctx
  });
  return block;
}

function create_fragment$1(ctx) {
  var meta;
  var t0;
  var div1;
  var h1;
  var t1;
  var t2;
  var form;
  var div0;
  var input;
  var t3;
  var label;
  var t4;
  var t5;
  var button;
  var t6;
  var button_disabled_value;
  var t7;
  var t8;
  var current;
  var mounted;
  var dispose;

  function select_block_type(ctx, dirty) {
    if (
    /*todos*/
    ctx[0].length === 0) return create_if_block;
    if (
    /*leftTodo*/
    ctx[3].length === 0) return create_if_block_1;
    if (
    /*leftTodo*/
    ctx[3].length === 1) return create_if_block_2;
    return create_else_block;
  }

  var current_block_type = select_block_type(ctx);
  var if_block = current_block_type(ctx);
  var tabs = new Tabs({
    props: {
      activeSort:
      /*activeSort*/
      ctx[2],
      sorts:
      /*sorts*/
      ctx[5],
      $$slots: {
        default: [create_default_slot]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  tabs.$on("tabChange",
  /*tabChange*/
  ctx[8]);
  var block = {
    c: function create() {
      meta = element("meta");
      t0 = space();
      div1 = element("div");
      h1 = element("h1");
      t1 = text("todos");
      t2 = space();
      form = element("form");
      div0 = element("div");
      input = element("input");
      t3 = space();
      label = element("label");
      t4 = text("What needs to be done?");
      t5 = space();
      button = element("button");
      t6 = text("➕");
      t7 = space();
      if_block.c();
      t8 = space();
      create_component(tabs.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-1sb2v1i\"]", document.head);
      meta = claim_element(head_nodes, "META", {
        name: true,
        content: true
      });
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      div1 = claim_element(nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      h1 = claim_element(div1_nodes, "H1", {
        class: true
      });
      var h1_nodes = children(h1);
      t1 = claim_text(h1_nodes, "todos");
      h1_nodes.forEach(detach_dev);
      t2 = claim_space(div1_nodes);
      form = claim_element(div1_nodes, "FORM", {});
      var form_nodes = children(form);
      div0 = claim_element(form_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      input = claim_element(div0_nodes, "INPUT", {
        id: true,
        name: true,
        placeholder: true,
        class: true
      });
      t3 = claim_space(div0_nodes);
      label = claim_element(div0_nodes, "LABEL", {
        class: true,
        for: true
      });
      var label_nodes = children(label);
      t4 = claim_text(label_nodes, "What needs to be done?");
      label_nodes.forEach(detach_dev);
      t5 = claim_space(div0_nodes);
      button = claim_element(div0_nodes, "BUTTON", {
        disabled: true,
        class: true
      });
      var button_nodes = children(button);
      t6 = claim_text(button_nodes, "➕");
      button_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      form_nodes.forEach(detach_dev);
      t7 = claim_space(div1_nodes);
      if_block.l(div1_nodes);
      t8 = claim_space(div1_nodes);
      claim_component(tabs.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(meta, "name", "Svelte Todo PWA");
      attr_dev(meta, "content", "Brent b1Mind Morton, This is a test Todo PWA with svelte/sapper ");
      add_location(meta, file$1, 66, 2, 1911);
      document.title = "Svelte Todo";
      attr_dev(h1, "class", "svelte-1a0a1hq");
      add_location(h1, file$1, 71, 2, 2084);
      attr_dev(input, "id", "inputTask");
      attr_dev(input, "name", "inputTask");
      attr_dev(input, "placeholder", " ");
      attr_dev(input, "class", "svelte-1a0a1hq");
      add_location(input, file$1, 74, 6, 2177);
      attr_dev(label, "class", "label svelte-1a0a1hq");
      attr_dev(label, "for", "inputTask");
      add_location(label, file$1, 75, 6, 2262);
      button.disabled = button_disabled_value = !
      /*newTodo*/
      ctx[1];
      attr_dev(button, "class", "svelte-1a0a1hq");
      add_location(button, file$1, 76, 6, 2336);
      attr_dev(div0, "class", "inputWrap svelte-1a0a1hq");
      add_location(div0, file$1, 73, 4, 2147);
      add_location(form, file$1, 72, 2, 2101);
      attr_dev(div1, "class", "wrap svelte-1a0a1hq");
      add_location(div1, file$1, 70, 0, 2063);
    },
    m: function mount(target, anchor) {
      append_dev(document.head, meta);
      insert_dev(target, t0, anchor);
      insert_dev(target, div1, anchor);
      append_dev(div1, h1);
      append_dev(h1, t1);
      append_dev(div1, t2);
      append_dev(div1, form);
      append_dev(form, div0);
      append_dev(div0, input);
      set_input_value(input,
      /*newTodo*/
      ctx[1]);
      append_dev(div0, t3);
      append_dev(div0, label);
      append_dev(label, t4);
      append_dev(div0, t5);
      append_dev(div0, button);
      append_dev(button, t6);
      append_dev(div1, t7);
      if_block.m(div1, null);
      append_dev(div1, t8);
      mount_component(tabs, div1, null);
      current = true;

      if (!mounted) {
        dispose = [listen_dev(input, "input",
        /*input_input_handler*/
        ctx[14]), listen_dev(form, "submit", prevent_default(
        /*addItem*/
        ctx[6]), false, true, false)];
        mounted = true;
      }
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*newTodo*/
      2 && input.value !==
      /*newTodo*/
      ctx[1]) {
        set_input_value(input,
        /*newTodo*/
        ctx[1]);
      }

      if (!current || dirty &
      /*newTodo*/
      2 && button_disabled_value !== (button_disabled_value = !
      /*newTodo*/
      ctx[1])) {
        prop_dev(button, "disabled", button_disabled_value);
      }

      if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
        if_block.p(ctx, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx);

        if (if_block) {
          if_block.c();
          if_block.m(div1, t8);
        }
      }

      var tabs_changes = {};
      if (dirty &
      /*activeSort*/
      4) tabs_changes.activeSort =
      /*activeSort*/
      ctx[2];

      if (dirty &
      /*$$scope, sortTodos*/
      1048592) {
        tabs_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      tabs.$set(tabs_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(tabs.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(tabs.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      detach_dev(meta);
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(div1);
      if_block.d();
      destroy_component(tabs);
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$1.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$1($$self, $$props, $$invalidate) {
  var storedId = writable("tid", 3);
  var storedList = writable("list", [{
    id: 2,
    done: false,
    text: "make it faster 🏃‍♀️"
  }, {
    id: 1,
    done: false,
    text: "make it clever 🦊"
  }, {
    id: 0,
    done: false,
    text: "make it svelte 🧈"
  }]);
  var todos = JSON.parse(localStorage.list);
  var tid = JSON.parse(localStorage.tid) + 1;
  var newTodo = "";
  var sorts = ["All", "Todo", "Done"];
  var activeSort = "All";

  function addItem(e) {
    if (!newTodo) return;
    var todo = {
      id: tid++,
      done: false,
      text: newTodo
    };
    $$invalidate(0, todos = [todo].concat(_toConsumableArray(todos)));
    storedList.set(todos);
    storedId.set(todo.id);
    $$invalidate(1, newTodo = "");
  }
  /* //Todo refactor to loop and reassign key[id]: value 
  todos.forEach((id) => {
  if (todo.id === id.id) {
   todo.id = tid + 100
   tid++
  }
  }) */


  function deleteItem(todo) {
    $$invalidate(0, todos = todos.filter(function (t) {
      return t !== todo;
    }));
    storedList.set(todos);
  }

  function clearCompleted() {
    $$invalidate(0, todos = todos.filter(function (t) {
      return !t.done;
    }));
  } //tabs and sorts


  var tabChange = function tabChange(e) {
    $$invalidate(2, activeSort = e.detail);
  };

  afterUpdate(function () {
    activeSort === "Todo" ? $$invalidate(4, sortTodos = leftTodo) : activeSort === "Done" ? $$invalidate(4, sortTodos = doneTodo) : $$invalidate(4, sortTodos = todos);
    storedList.set(todos);
  });
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Routes> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Routes", $$slots, []);

  function input_input_handler() {
    newTodo = this.value;
    $$invalidate(1, newTodo);
  }

  function input_change_handler(todo) {
    todo.done = this.checked;
    $$invalidate(4, sortTodos), $$invalidate(0, todos);
  }

  var click_handler = function click_handler(todo) {
    return deleteItem(todo);
  };

  $$self.$capture_state = function () {
    return {
      afterUpdate: afterUpdate,
      beforeUpdate: beforeUpdate,
      onMount: onMount,
      fly: fly,
      flip: flip,
      writable: writable,
      readable: readable,
      derived: derived,
      Tabs: Tabs,
      storedId: storedId,
      storedList: storedList,
      todos: todos,
      tid: tid,
      newTodo: newTodo,
      sorts: sorts,
      activeSort: activeSort,
      addItem: addItem,
      deleteItem: deleteItem,
      clearCompleted: clearCompleted,
      tabChange: tabChange,
      leftTodo: leftTodo,
      doneTodo: doneTodo,
      sortTodos: sortTodos
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("storedId" in $$props) storedId = $$props.storedId;
    if ("storedList" in $$props) storedList = $$props.storedList;
    if ("todos" in $$props) $$invalidate(0, todos = $$props.todos);
    if ("tid" in $$props) tid = $$props.tid;
    if ("newTodo" in $$props) $$invalidate(1, newTodo = $$props.newTodo);
    if ("sorts" in $$props) $$invalidate(5, sorts = $$props.sorts);
    if ("activeSort" in $$props) $$invalidate(2, activeSort = $$props.activeSort);
    if ("leftTodo" in $$props) $$invalidate(3, leftTodo = $$props.leftTodo);
    if ("doneTodo" in $$props) doneTodo = $$props.doneTodo;
    if ("sortTodos" in $$props) $$invalidate(4, sortTodos = $$props.sortTodos);
  };

  var leftTodo;
  var doneTodo;
  var sortTodos;

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$self.$$.update = function () {
    if ($$self.$$.dirty &
    /*todos*/
    1) {
       $$invalidate(3, leftTodo = todos.filter(function (t) {
        return !t.done;
      }));
    }

    if ($$self.$$.dirty &
    /*todos*/
    1) {
       doneTodo = todos.filter(function (t) {
        return t.done;
      });
    }

    if ($$self.$$.dirty &
    /*todos*/
    1) {
       $$invalidate(4, sortTodos = todos);
    }
  };

  return [todos, newTodo, activeSort, leftTodo, sortTodos, sorts, addItem, deleteItem, tabChange, tid, doneTodo, storedId, storedList, clearCompleted, input_input_handler, input_change_handler, click_handler];
}

var Routes = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Routes, _SvelteComponentDev);

  var _super = _createSuper$1(Routes);

  function Routes(options) {
    var _this;

    _classCallCheck(this, Routes);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Routes",
      options: options,
      id: create_fragment$1.name
    });
    return _this;
  }

  return Routes;
}(SvelteComponentDev);

export default Routes;
