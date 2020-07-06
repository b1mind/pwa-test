import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, s as safe_not_equal, d as _assertThisInitialized, e as dispatch_dev, S as SvelteComponentDev, v as validate_slots, g as element, h as claim_element, j as children, l as detach_dev, m as attr_dev, n as add_location, o as insert_dev, p as append_dev, w as noop, y as space, t as text, B as claim_space, k as claim_text, f as _createClass, a0 as validate_each_argument, a1 as createEventDispatcher, W as toggle_class, q as listen_dev, u as set_data_dev, r as _slicedToArray, a2 as destroy_each, z as create_component, A as query_selector_all, C as claim_component, D as mount_component, E as transition_in, F as transition_out, G as destroy_component } from './client.9a226a03.js';
import './defineProperty.b786bad4.js';
import { T as Trigger } from './Trigger.233745f0.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src\\Components\\Header.svelte";

function create_fragment(ctx) {
  var header;
  var h1;
  var img;
  var img_src_value;
  var block = {
    c: function create() {
      header = element("header");
      h1 = element("h1");
      img = element("img");
      this.h();
    },
    l: function claim(nodes) {
      header = claim_element(nodes, "HEADER", {});
      var header_nodes = children(header);
      h1 = claim_element(header_nodes, "H1", {
        class: true
      });
      var h1_nodes = children(h1);
      img = claim_element(h1_nodes, "IMG", {
        src: true,
        alt: true,
        class: true
      });
      h1_nodes.forEach(detach_dev);
      header_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      if (img.src !== (img_src_value = "images/svelte.png")) attr_dev(img, "src", img_src_value);
      attr_dev(img, "alt", "logo");
      attr_dev(img, "class", "svelte-1xbat5n");
      add_location(img, file, 6, 4, 41);
      attr_dev(h1, "class", "svelte-1xbat5n");
      add_location(h1, file, 5, 2, 32);
      add_location(header, file, 4, 0, 21);
    },
    m: function mount(target, anchor) {
      insert_dev(target, header, anchor);
      append_dev(header, h1);
      append_dev(h1, img);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(header);
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

function instance($$self, $$props) {
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Header> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Header", $$slots, []);
  return [];
}

var Header = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Header, _SvelteComponentDev);

  var _super = _createSuper(Header);

  function Header(options) {
    var _this;

    _classCallCheck(this, Header);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Header",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Header;
}(SvelteComponentDev);

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file$1 = "src\\Components\\Footer.svelte";

function create_fragment$1(ctx) {
  var hr;
  var t0;
  var footer;
  var div;
  var t1;
  var block = {
    c: function create() {
      hr = element("hr");
      t0 = space();
      footer = element("footer");
      div = element("div");
      t1 = text("Copyright 2020");
      this.h();
    },
    l: function claim(nodes) {
      hr = claim_element(nodes, "HR", {});
      t0 = claim_space(nodes);
      footer = claim_element(nodes, "FOOTER", {
        class: true
      });
      var footer_nodes = children(footer);
      div = claim_element(footer_nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      t1 = claim_text(div_nodes, "Copyright 2020");
      div_nodes.forEach(detach_dev);
      footer_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(hr, file$1, 4, 0, 21);
      attr_dev(div, "class", "copyright");
      add_location(div, file$1, 6, 2, 39);
      attr_dev(footer, "class", "svelte-tjjwyp");
      add_location(footer, file$1, 5, 0, 28);
    },
    m: function mount(target, anchor) {
      insert_dev(target, hr, anchor);
      insert_dev(target, t0, anchor);
      insert_dev(target, footer, anchor);
      append_dev(footer, div);
      append_dev(div, t1);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(hr);
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(footer);
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

function instance$1($$self, $$props) {
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Footer> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Footer", $$slots, []);
  return [];
}

var Footer = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Footer, _SvelteComponentDev);

  var _super = _createSuper$1(Footer);

  function Footer(options) {
    var _this;

    _classCallCheck(this, Footer);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Footer",
      options: options,
      id: create_fragment$1.name
    });
    return _this;
  }

  return Footer;
}(SvelteComponentDev);

function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file$2 = "src\\Components\\shared\\Tabs.svelte";

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[4] = list[i];
  return child_ctx;
} // (11:4) {#each items as item}


function create_each_block(ctx) {
  var li;
  var div;
  var t0_value =
  /*item*/
  ctx[4] + "";
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
      (_ctx = ctx)[3].apply(_ctx, [
      /*item*/
      ctx[4]].concat(args))
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
      attr_dev(div, "class", "svelte-13rlnl7");
      toggle_class(div, "active",
      /*item*/
      ctx[4] ===
      /*activeItem*/
      ctx[1]);
      add_location(div, file$2, 12, 8, 270);
      attr_dev(li, "class", "svelte-13rlnl7");
      add_location(li, file$2, 11, 6, 212);
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
      /*items*/
      1 && t0_value !== (t0_value =
      /*item*/
      ctx[4] + "")) set_data_dev(t0, t0_value);

      if (dirty &
      /*items, activeItem*/
      3) {
        toggle_class(div, "active",
        /*item*/
        ctx[4] ===
        /*activeItem*/
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
    source: "(11:4) {#each items as item}",
    ctx: ctx
  });
  return block;
}

function create_fragment$2(ctx) {
  var div;
  var ul;
  var each_value =
  /*items*/
  ctx[0];
  validate_each_argument(each_value);
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  var block = {
    c: function create() {
      div = element("div");
      ul = element("ul");

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      ul = claim_element(div_nodes, "UL", {
        class: true
      });
      var ul_nodes = children(ul);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].l(ul_nodes);
      }

      ul_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(ul, "class", "svelte-13rlnl7");
      add_location(ul, file$2, 9, 2, 175);
      attr_dev(div, "class", "tabs svelte-13rlnl7");
      add_location(div, file$2, 8, 0, 154);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, ul);

      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(ul, null);
      }
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*dispatch, items, activeItem*/
      7) {
        each_value =
        /*items*/
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
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
      destroy_each(each_blocks, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$2.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$2($$self, $$props, $$invalidate) {
  var dispatch = createEventDispatcher();
  var items = $$props.items;
  var activeItem = $$props.activeItem;
  var writable_props = ["items", "activeItem"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Tabs> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Tabs", $$slots, []);

  var click_handler = function click_handler(item) {
    return dispatch("tabChange", item);
  };

  $$self.$set = function ($$props) {
    if ("items" in $$props) $$invalidate(0, items = $$props.items);
    if ("activeItem" in $$props) $$invalidate(1, activeItem = $$props.activeItem);
  };

  $$self.$capture_state = function () {
    return {
      createEventDispatcher: createEventDispatcher,
      dispatch: dispatch,
      items: items,
      activeItem: activeItem
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("dispatch" in $$props) $$invalidate(2, dispatch = $$props.dispatch);
    if ("items" in $$props) $$invalidate(0, items = $$props.items);
    if ("activeItem" in $$props) $$invalidate(1, activeItem = $$props.activeItem);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [items, activeItem, dispatch, click_handler];
}

var Tabs = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Tabs, _SvelteComponentDev);

  var _super = _createSuper$2(Tabs);

  function Tabs(options) {
    var _this;

    _classCallCheck(this, Tabs);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$2, create_fragment$2, safe_not_equal, {
      items: 0,
      activeItem: 1
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Tabs",
      options: options,
      id: create_fragment$2.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*items*/
    ctx[0] === undefined && !("items" in props)) {
      console.warn("<Tabs> was created without expected prop 'items'");
    }

    if (
    /*activeItem*/
    ctx[1] === undefined && !("activeItem" in props)) {
      console.warn("<Tabs> was created without expected prop 'activeItem'");
    }

    return _this;
  }

  _createClass(Tabs, [{
    key: "items",
    get: function get() {
      throw new Error("<Tabs>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Tabs>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "activeItem",
    get: function get() {
      throw new Error("<Tabs>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Tabs>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Tabs;
}(SvelteComponentDev);

function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file$3 = "src\\routes\\about.svelte"; // (30:2) {:else}

function create_else_block(ctx) {
  var p;
  var t;
  var block = {
    c: function create() {
      p = element("p");
      t = text("History of svelte");
      this.h();
    },
    l: function claim(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t = claim_text(p_nodes, "History of svelte");
      p_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(p, file$3, 30, 4, 786);
    },
    m: function mount(target, anchor) {
      insert_dev(target, p, anchor);
      append_dev(p, t);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(p);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_else_block.name,
    type: "else",
    source: "(30:2) {:else}",
    ctx: ctx
  });
  return block;
} // (27:35) 


function create_if_block_1(ctx) {
  var p;
  var t0;
  var t1;
  var a;
  var t2;
  var block = {
    c: function create() {
      p = element("p");
      t0 = text("Bio");
      t1 = space();
      a = element("a");
      t2 = text("test");
      this.h();
    },
    l: function claim(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t0 = claim_text(p_nodes, "Bio");
      p_nodes.forEach(detach_dev);
      t1 = claim_space(nodes);
      a = claim_element(nodes, "A", {
        href: true
      });
      var a_nodes = children(a);
      t2 = claim_text(a_nodes, "test");
      a_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(p, file$3, 27, 4, 722);
      attr_dev(a, "href", "projects#anchor");
      add_location(a, file$3, 28, 4, 737);
    },
    m: function mount(target, anchor) {
      insert_dev(target, p, anchor);
      append_dev(p, t0);
      insert_dev(target, t1, anchor);
      insert_dev(target, a, anchor);
      append_dev(a, t2);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(p);
      if (detaching) detach_dev(t1);
      if (detaching) detach_dev(a);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_1.name,
    type: "if",
    source: "(27:35) ",
    ctx: ctx
  });
  return block;
} // (25:2) {#if activeItem === 'Bio'}


function create_if_block(ctx) {
  var p;
  var t;
  var block = {
    c: function create() {
      p = element("p");
      t = text("This is the 'about' page. There's not much here.");
      this.h();
    },
    l: function claim(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t = claim_text(p_nodes, "This is the 'about' page. There's not much here.");
      p_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(p, file$3, 25, 4, 626);
    },
    m: function mount(target, anchor) {
      insert_dev(target, p, anchor);
      append_dev(p, t);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(p);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block.name,
    type: "if",
    source: "(25:2) {#if activeItem === 'Bio'}",
    ctx: ctx
  });
  return block;
} // (34:0) <Trigger>


function create_default_slot_1(ctx) {
  var p0;
  var t0;
  var t1;
  var p1;
  var t2;
  var t3;
  var p2;
  var t4;
  var block = {
    c: function create() {
      p0 = element("p");
      t0 = text("test");
      t1 = space();
      p1 = element("p");
      t2 = text("test");
      t3 = space();
      p2 = element("p");
      t4 = text("test");
      this.h();
    },
    l: function claim(nodes) {
      p0 = claim_element(nodes, "P", {});
      var p0_nodes = children(p0);
      t0 = claim_text(p0_nodes, "test");
      p0_nodes.forEach(detach_dev);
      t1 = claim_space(nodes);
      p1 = claim_element(nodes, "P", {});
      var p1_nodes = children(p1);
      t2 = claim_text(p1_nodes, "test");
      p1_nodes.forEach(detach_dev);
      t3 = claim_space(nodes);
      p2 = claim_element(nodes, "P", {});
      var p2_nodes = children(p2);
      t4 = claim_text(p2_nodes, "test");
      p2_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(p0, file$3, 34, 2, 838);
      add_location(p1, file$3, 35, 2, 852);
      add_location(p2, file$3, 36, 2, 866);
    },
    m: function mount(target, anchor) {
      insert_dev(target, p0, anchor);
      append_dev(p0, t0);
      insert_dev(target, t1, anchor);
      insert_dev(target, p1, anchor);
      append_dev(p1, t2);
      insert_dev(target, t3, anchor);
      insert_dev(target, p2, anchor);
      append_dev(p2, t4);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(p0);
      if (detaching) detach_dev(t1);
      if (detaching) detach_dev(p1);
      if (detaching) detach_dev(t3);
      if (detaching) detach_dev(p2);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_1.name,
    type: "slot",
    source: "(34:0) <Trigger>",
    ctx: ctx
  });
  return block;
} // (40:0) <Trigger {animation}>


function create_default_slot(ctx) {
  var p0;
  var t0;
  var t1;
  var p1;
  var t2;
  var t3;
  var p2;
  var t4;
  var block = {
    c: function create() {
      p0 = element("p");
      t0 = text("test");
      t1 = space();
      p1 = element("p");
      t2 = text("test");
      t3 = space();
      p2 = element("p");
      t4 = text("test");
      this.h();
    },
    l: function claim(nodes) {
      p0 = claim_element(nodes, "P", {});
      var p0_nodes = children(p0);
      t0 = claim_text(p0_nodes, "test");
      p0_nodes.forEach(detach_dev);
      t1 = claim_space(nodes);
      p1 = claim_element(nodes, "P", {});
      var p1_nodes = children(p1);
      t2 = claim_text(p1_nodes, "test");
      p1_nodes.forEach(detach_dev);
      t3 = claim_space(nodes);
      p2 = claim_element(nodes, "P", {});
      var p2_nodes = children(p2);
      t4 = claim_text(p2_nodes, "test");
      p2_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(p0, file$3, 40, 2, 944);
      add_location(p1, file$3, 41, 2, 958);
      add_location(p2, file$3, 42, 2, 972);
    },
    m: function mount(target, anchor) {
      insert_dev(target, p0, anchor);
      append_dev(p0, t0);
      insert_dev(target, t1, anchor);
      insert_dev(target, p1, anchor);
      append_dev(p1, t2);
      insert_dev(target, t3, anchor);
      insert_dev(target, p2, anchor);
      append_dev(p2, t4);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(p0);
      if (detaching) detach_dev(t1);
      if (detaching) detach_dev(p1);
      if (detaching) detach_dev(t3);
      if (detaching) detach_dev(p2);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot.name,
    type: "slot",
    source: "(40:0) <Trigger {animation}>",
    ctx: ctx
  });
  return block;
}

function create_fragment$3(ctx) {
  var t0;
  var h1;
  var t1;
  var t2;
  var div0;
  var t3;
  var t4;
  var t5;
  var div1;
  var t6;
  var t7;
  var t8;
  var div2;
  var t9;
  var t10;
  var current;
  var tabs = new Tabs({
    props: {
      activeItem:
      /*activeItem*/
      ctx[0],
      items:
      /*items*/
      ctx[1]
    },
    $$inline: true
  });
  tabs.$on("tabChange",
  /*tabChange*/
  ctx[2]);

  function select_block_type(ctx, dirty) {
    if (
    /*activeItem*/
    ctx[0] === "Bio") return create_if_block;
    if (
    /*activeItem*/
    ctx[0] === "Story") return create_if_block_1;
    return create_else_block;
  }

  var current_block_type = select_block_type(ctx);
  var if_block = current_block_type(ctx);
  var trigger0 = new Trigger({
    props: {
      $$slots: {
        default: [create_default_slot_1]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var trigger1 = new Trigger({
    props: {
      animation:
      /*animation*/
      ctx[3],
      $$slots: {
        default: [create_default_slot]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var footer = new Footer({
    $$inline: true
  });
  var block = {
    c: function create() {
      t0 = space();
      h1 = element("h1");
      t1 = text("About Svelte");
      t2 = space();
      div0 = element("div");
      create_component(tabs.$$.fragment);
      t3 = space();
      if_block.c();
      t4 = space();
      create_component(trigger0.$$.fragment);
      t5 = space();
      div1 = element("div");
      t6 = text("test");
      t7 = space();
      create_component(trigger1.$$.fragment);
      t8 = space();
      div2 = element("div");
      t9 = text("test");
      t10 = space();
      create_component(footer.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-1myew8g\"]", document.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      h1 = claim_element(nodes, "H1", {});
      var h1_nodes = children(h1);
      t1 = claim_text(h1_nodes, "About Svelte");
      h1_nodes.forEach(detach_dev);
      t2 = claim_space(nodes);
      div0 = claim_element(nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      claim_component(tabs.$$.fragment, div0_nodes);
      t3 = claim_space(div0_nodes);
      if_block.l(div0_nodes);
      div0_nodes.forEach(detach_dev);
      t4 = claim_space(nodes);
      claim_component(trigger0.$$.fragment, nodes);
      t5 = claim_space(nodes);
      div1 = claim_element(nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      t6 = claim_text(div1_nodes, "test");
      div1_nodes.forEach(detach_dev);
      t7 = claim_space(nodes);
      claim_component(trigger1.$$.fragment, nodes);
      t8 = claim_space(nodes);
      div2 = claim_element(nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      t9 = claim_text(div2_nodes, "test");
      div2_nodes.forEach(detach_dev);
      t10 = claim_space(nodes);
      claim_component(footer.$$.fragment, nodes);
      this.h();
    },
    h: function hydrate() {
      document.title = "About";
      add_location(h1, file$3, 20, 0, 492);
      attr_dev(div0, "class", "spacer svelte-x4hzh2");
      add_location(div0, file$3, 22, 0, 515);
      attr_dev(div1, "class", "spacer svelte-x4hzh2");
      add_location(div1, file$3, 38, 0, 889);
      attr_dev(div2, "class", "spacer svelte-x4hzh2");
      add_location(div2, file$3, 44, 0, 995);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, h1, anchor);
      append_dev(h1, t1);
      insert_dev(target, t2, anchor);
      insert_dev(target, div0, anchor);
      mount_component(tabs, div0, null);
      append_dev(div0, t3);
      if_block.m(div0, null);
      insert_dev(target, t4, anchor);
      mount_component(trigger0, target, anchor);
      insert_dev(target, t5, anchor);
      insert_dev(target, div1, anchor);
      append_dev(div1, t6);
      insert_dev(target, t7, anchor);
      mount_component(trigger1, target, anchor);
      insert_dev(target, t8, anchor);
      insert_dev(target, div2, anchor);
      append_dev(div2, t9);
      insert_dev(target, t10, anchor);
      mount_component(footer, target, anchor);
      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      var tabs_changes = {};
      if (dirty &
      /*activeItem*/
      1) tabs_changes.activeItem =
      /*activeItem*/
      ctx[0];
      tabs.$set(tabs_changes);

      if (current_block_type !== (current_block_type = select_block_type(ctx))) {
        if_block.d(1);
        if_block = current_block_type(ctx);

        if (if_block) {
          if_block.c();
          if_block.m(div0, null);
        }
      }

      var trigger0_changes = {};

      if (dirty &
      /*$$scope*/
      16) {
        trigger0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      trigger0.$set(trigger0_changes);
      var trigger1_changes = {};

      if (dirty &
      /*$$scope*/
      16) {
        trigger1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      trigger1.$set(trigger1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(tabs.$$.fragment, local);
      transition_in(trigger0.$$.fragment, local);
      transition_in(trigger1.$$.fragment, local);
      transition_in(footer.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(tabs.$$.fragment, local);
      transition_out(trigger0.$$.fragment, local);
      transition_out(trigger1.$$.fragment, local);
      transition_out(footer.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(h1);
      if (detaching) detach_dev(t2);
      if (detaching) detach_dev(div0);
      destroy_component(tabs);
      if_block.d();
      if (detaching) detach_dev(t4);
      destroy_component(trigger0, detaching);
      if (detaching) detach_dev(t5);
      if (detaching) detach_dev(div1);
      if (detaching) detach_dev(t7);
      destroy_component(trigger1, detaching);
      if (detaching) detach_dev(t8);
      if (detaching) detach_dev(div2);
      if (detaching) detach_dev(t10);
      destroy_component(footer, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$3.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$3($$self, $$props, $$invalidate) {
  var items = ["Bio", "Story", "History"];
  var activeItem = "Bio";

  var tabChange = function tabChange(e) {
    $$invalidate(0, activeItem = e.detail);
  };

  var animation = {
    autoAlpha: 0,
    x: "-=100",
    stagger: 0.3
  };
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<About> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("About", $$slots, []);

  $$self.$capture_state = function () {
    return {
      Header: Header,
      Footer: Footer,
      Tabs: Tabs,
      Trigger: Trigger,
      items: items,
      activeItem: activeItem,
      tabChange: tabChange,
      animation: animation
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("items" in $$props) $$invalidate(1, items = $$props.items);
    if ("activeItem" in $$props) $$invalidate(0, activeItem = $$props.activeItem);
    if ("animation" in $$props) $$invalidate(3, animation = $$props.animation);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [activeItem, items, tabChange, animation];
}

var About = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(About, _SvelteComponentDev);

  var _super = _createSuper$3(About);

  function About(options) {
    var _this;

    _classCallCheck(this, About);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$3, create_fragment$3, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "About",
      options: options,
      id: create_fragment$3.name
    });
    return _this;
  }

  return About;
}(SvelteComponentDev);

export default About;
