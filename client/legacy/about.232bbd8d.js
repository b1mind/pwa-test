import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, s as safe_not_equal, d as _assertThisInitialized, e as dispatch_dev, S as SvelteComponentDev, v as validate_slots, g as element, h as claim_element, j as children, l as detach_dev, m as attr_dev, n as add_location, o as insert_dev, p as append_dev, w as noop, y as space, t as text, B as claim_space, k as claim_text, f as _createClass, a0 as validate_each_argument, a1 as createEventDispatcher, T as toggle_class, q as listen_dev, u as set_data_dev, r as _slicedToArray, a2 as destroy_each, z as create_component, A as query_selector_all, C as claim_component, D as mount_component, E as transition_in, F as transition_out, G as destroy_component } from './client.9dceeb83.js';
import { T as Trigger } from './Trigger.e02f5033.js';
import { I as Icon, f as faArrowDown } from './index.es.bb85308c.js';

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
      attr_dev(img, "class", "svelte-1p33ko0");
      add_location(img, file, 6, 4, 41);
      attr_dev(h1, "class", "svelte-1p33ko0");
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
var file$3 = "src\\routes\\about.svelte"; // (37:2) {:else}

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
      p = claim_element(nodes, "P", {
        class: true
      });
      var p_nodes = children(p);
      t = claim_text(p_nodes, "History of svelte");
      p_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(p, "class", "svelte-133z8mf");
      add_location(p, file$3, 37, 4, 897);
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
    source: "(37:2) {:else}",
    ctx: ctx
  });
  return block;
} // (32:35) 


function create_if_block_1(ctx) {
  var p;
  var t0;
  var a;
  var t1;
  var block = {
    c: function create() {
      p = element("p");
      t0 = text("Bio\n      ");
      a = element("a");
      t1 = text("test");
      this.h();
    },
    l: function claim(nodes) {
      p = claim_element(nodes, "P", {
        class: true
      });
      var p_nodes = children(p);
      t0 = claim_text(p_nodes, "Bio\n      ");
      a = claim_element(p_nodes, "A", {
        href: true
      });
      var a_nodes = children(a);
      t1 = claim_text(a_nodes, "test");
      a_nodes.forEach(detach_dev);
      p_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(a, "href", "projects#anchor");
      add_location(a, file$3, 34, 6, 839);
      attr_dev(p, "class", "svelte-133z8mf");
      add_location(p, file$3, 32, 4, 819);
    },
    m: function mount(target, anchor) {
      insert_dev(target, p, anchor);
      append_dev(p, t0);
      append_dev(p, a);
      append_dev(a, t1);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(p);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_1.name,
    type: "if",
    source: "(32:35) ",
    ctx: ctx
  });
  return block;
} // (30:2) {#if activeItem === 'Bio'}


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
      p = claim_element(nodes, "P", {
        class: true
      });
      var p_nodes = children(p);
      t = claim_text(p_nodes, "This is the 'about' page. There's not much here.");
      p_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(p, "class", "svelte-133z8mf");
      add_location(p, file$3, 30, 4, 723);
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
    source: "(30:2) {#if activeItem === 'Bio'}",
    ctx: ctx
  });
  return block;
} // (41:0) <Trigger start="bottom center">


function create_default_slot_4(ctx) {
  var t0;
  var span0;
  var t1;
  var t2;
  var t3;
  var span1;
  var t4;
  var t5;
  var t6;
  var span2;
  var t7;
  var current;
  var icon0 = new Icon({
    props: {
      icon: faArrowDown
    },
    $$inline: true
  });
  var icon1 = new Icon({
    props: {
      icon: faArrowDown
    },
    $$inline: true
  });
  var icon2 = new Icon({
    props: {
      icon: faArrowDown
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(icon0.$$.fragment);
      t0 = space();
      span0 = element("span");
      t1 = text("keep scrolling");
      t2 = space();
      create_component(icon1.$$.fragment);
      t3 = space();
      span1 = element("span");
      t4 = text("don't stop");
      t5 = space();
      create_component(icon2.$$.fragment);
      t6 = space();
      span2 = element("span");
      t7 = text("ya thats the");
      this.h();
    },
    l: function claim(nodes) {
      claim_component(icon0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      span0 = claim_element(nodes, "SPAN", {});
      var span0_nodes = children(span0);
      t1 = claim_text(span0_nodes, "keep scrolling");
      span0_nodes.forEach(detach_dev);
      t2 = claim_space(nodes);
      claim_component(icon1.$$.fragment, nodes);
      t3 = claim_space(nodes);
      span1 = claim_element(nodes, "SPAN", {});
      var span1_nodes = children(span1);
      t4 = claim_text(span1_nodes, "don't stop");
      span1_nodes.forEach(detach_dev);
      t5 = claim_space(nodes);
      claim_component(icon2.$$.fragment, nodes);
      t6 = claim_space(nodes);
      span2 = claim_element(nodes, "SPAN", {});
      var span2_nodes = children(span2);
      t7 = claim_text(span2_nodes, "ya thats the");
      span2_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(span0, file$3, 42, 2, 1001);
      add_location(span1, file$3, 44, 2, 1061);
      add_location(span2, file$3, 46, 2, 1117);
    },
    m: function mount(target, anchor) {
      mount_component(icon0, target, anchor);
      insert_dev(target, t0, anchor);
      insert_dev(target, span0, anchor);
      append_dev(span0, t1);
      insert_dev(target, t2, anchor);
      mount_component(icon1, target, anchor);
      insert_dev(target, t3, anchor);
      insert_dev(target, span1, anchor);
      append_dev(span1, t4);
      insert_dev(target, t5, anchor);
      mount_component(icon2, target, anchor);
      insert_dev(target, t6, anchor);
      insert_dev(target, span2, anchor);
      append_dev(span2, t7);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current) return;
      transition_in(icon0.$$.fragment, local);
      transition_in(icon1.$$.fragment, local);
      transition_in(icon2.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(icon0.$$.fragment, local);
      transition_out(icon1.$$.fragment, local);
      transition_out(icon2.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(icon0, detaching);
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(span0);
      if (detaching) detach_dev(t2);
      destroy_component(icon1, detaching);
      if (detaching) detach_dev(t3);
      if (detaching) detach_dev(span1);
      if (detaching) detach_dev(t5);
      destroy_component(icon2, detaching);
      if (detaching) detach_dev(t6);
      if (detaching) detach_dev(span2);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_4.name,
    type: "slot",
    source: "(41:0) <Trigger start=\\\"bottom center\\\">",
    ctx: ctx
  });
  return block;
} // (49:0) <Trigger start="top center" pin={false} scrub={false} tween={{ autoAlpha: 0, x: '+=200' }}>


function create_default_slot_3(ctx) {
  var p;
  var t;
  var block = {
    c: function create() {
      p = element("p");
      t = text("Good test like any other test its more like a screw up gone right");
      this.h();
    },
    l: function claim(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t = claim_text(p_nodes, "Good test like any other test its more like a screw up gone right");
      p_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(p, file$3, 49, 2, 1248);
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
    id: create_default_slot_3.name,
    type: "slot",
    source: "(49:0) <Trigger start=\\\"top center\\\" pin={false} scrub={false} tween={{ autoAlpha: 0, x: '+=200' }}>",
    ctx: ctx
  });
  return block;
} // (53:2) <Trigger end="300 top" tween={{ autoAlpha: 0, y: 100, stagger: 0.5 }}>


function create_default_slot_2(ctx) {
  var span0;
  var t0;
  var t1;
  var span1;
  var t2;
  var t3;
  var span2;
  var t4;
  var t5;
  var span3;
  var t6;
  var t7;
  var span4;
  var t8;
  var t9;
  var span5;
  var t10;
  var block = {
    c: function create() {
      span0 = element("span");
      t0 = text("one");
      t1 = space();
      span1 = element("span");
      t2 = text("two");
      t3 = space();
      span2 = element("span");
      t4 = text("three");
      t5 = space();
      span3 = element("span");
      t6 = text("four");
      t7 = space();
      span4 = element("span");
      t8 = text("five");
      t9 = space();
      span5 = element("span");
      t10 = text("six");
      this.h();
    },
    l: function claim(nodes) {
      span0 = claim_element(nodes, "SPAN", {});
      var span0_nodes = children(span0);
      t0 = claim_text(span0_nodes, "one");
      span0_nodes.forEach(detach_dev);
      t1 = claim_space(nodes);
      span1 = claim_element(nodes, "SPAN", {});
      var span1_nodes = children(span1);
      t2 = claim_text(span1_nodes, "two");
      span1_nodes.forEach(detach_dev);
      t3 = claim_space(nodes);
      span2 = claim_element(nodes, "SPAN", {});
      var span2_nodes = children(span2);
      t4 = claim_text(span2_nodes, "three");
      span2_nodes.forEach(detach_dev);
      t5 = claim_space(nodes);
      span3 = claim_element(nodes, "SPAN", {});
      var span3_nodes = children(span3);
      t6 = claim_text(span3_nodes, "four");
      span3_nodes.forEach(detach_dev);
      t7 = claim_space(nodes);
      span4 = claim_element(nodes, "SPAN", {});
      var span4_nodes = children(span4);
      t8 = claim_text(span4_nodes, "five");
      span4_nodes.forEach(detach_dev);
      t9 = claim_space(nodes);
      span5 = claim_element(nodes, "SPAN", {});
      var span5_nodes = children(span5);
      t10 = claim_text(span5_nodes, "six");
      span5_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(span0, file$3, 53, 4, 1430);
      add_location(span1, file$3, 54, 4, 1451);
      add_location(span2, file$3, 55, 4, 1472);
      add_location(span3, file$3, 56, 4, 1495);
      add_location(span4, file$3, 57, 4, 1517);
      add_location(span5, file$3, 58, 4, 1539);
    },
    m: function mount(target, anchor) {
      insert_dev(target, span0, anchor);
      append_dev(span0, t0);
      insert_dev(target, t1, anchor);
      insert_dev(target, span1, anchor);
      append_dev(span1, t2);
      insert_dev(target, t3, anchor);
      insert_dev(target, span2, anchor);
      append_dev(span2, t4);
      insert_dev(target, t5, anchor);
      insert_dev(target, span3, anchor);
      append_dev(span3, t6);
      insert_dev(target, t7, anchor);
      insert_dev(target, span4, anchor);
      append_dev(span4, t8);
      insert_dev(target, t9, anchor);
      insert_dev(target, span5, anchor);
      append_dev(span5, t10);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(span0);
      if (detaching) detach_dev(t1);
      if (detaching) detach_dev(span1);
      if (detaching) detach_dev(t3);
      if (detaching) detach_dev(span2);
      if (detaching) detach_dev(t5);
      if (detaching) detach_dev(span3);
      if (detaching) detach_dev(t7);
      if (detaching) detach_dev(span4);
      if (detaching) detach_dev(t9);
      if (detaching) detach_dev(span5);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_2.name,
    type: "slot",
    source: "(53:2) <Trigger end=\\\"300 top\\\" tween={{ autoAlpha: 0, y: 100, stagger: 0.5 }}>",
    ctx: ctx
  });
  return block;
} // (62:0) <Trigger {start} tween={{ autoAlpha: 0, y: 300, stagger: 0.5 }}>


function create_default_slot_1(ctx) {
  var t0;
  var t1;
  var current;
  var icon0 = new Icon({
    props: {
      icon: faArrowDown
    },
    $$inline: true
  });
  var icon1 = new Icon({
    props: {
      icon: faArrowDown
    },
    $$inline: true
  });
  var icon2 = new Icon({
    props: {
      icon: faArrowDown
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(icon0.$$.fragment);
      t0 = space();
      create_component(icon1.$$.fragment);
      t1 = space();
      create_component(icon2.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(icon0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(icon1.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(icon2.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(icon0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(icon1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(icon2, target, anchor);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current) return;
      transition_in(icon0.$$.fragment, local);
      transition_in(icon1.$$.fragment, local);
      transition_in(icon2.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(icon0.$$.fragment, local);
      transition_out(icon1.$$.fragment, local);
      transition_out(icon2.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(icon0, detaching);
      if (detaching) detach_dev(t0);
      destroy_component(icon1, detaching);
      if (detaching) detach_dev(t1);
      destroy_component(icon2, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_1.name,
    type: "slot",
    source: "(62:0) <Trigger {start} tween={{ autoAlpha: 0, y: 300, stagger: 0.5 }}>",
    ctx: ctx
  });
  return block;
} // (67:0) <Trigger>


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
      add_location(p0, file$3, 67, 2, 1754);
      add_location(p1, file$3, 68, 2, 1768);
      add_location(p2, file$3, 69, 2, 1782);
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
    source: "(67:0) <Trigger>",
    ctx: ctx
  });
  return block;
}

function create_fragment$3(ctx) {
  var t0;
  var t1;
  var h1;
  var t2;
  var t3;
  var div0;
  var t4;
  var t5;
  var t6;
  var t7;
  var div1;
  var t8;
  var t9;
  var t10;
  var div2;
  var t11;
  var t12;
  var current;
  var header = new Header({
    $$inline: true
  });
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
      start: "bottom center",
      $$slots: {
        default: [create_default_slot_4]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var trigger1 = new Trigger({
    props: {
      start: "top center",
      pin: false,
      scrub: false,
      tween: {
        autoAlpha: 0,
        x: "+=200"
      },
      $$slots: {
        default: [create_default_slot_3]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var trigger2 = new Trigger({
    props: {
      end: "300 top",
      tween: {
        autoAlpha: 0,
        y: 100,
        stagger: 0.5
      },
      $$slots: {
        default: [create_default_slot_2]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var trigger3 = new Trigger({
    props: {
      start:
      /*start*/
      ctx[3],
      tween: {
        autoAlpha: 0,
        y: 300,
        stagger: 0.5
      },
      $$slots: {
        default: [create_default_slot_1]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var trigger4 = new Trigger({
    props: {
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
      create_component(header.$$.fragment);
      t1 = space();
      h1 = element("h1");
      t2 = text("About Svelte");
      t3 = space();
      div0 = element("div");
      create_component(tabs.$$.fragment);
      t4 = space();
      if_block.c();
      t5 = space();
      create_component(trigger0.$$.fragment);
      t6 = space();
      create_component(trigger1.$$.fragment);
      t7 = space();
      div1 = element("div");
      create_component(trigger2.$$.fragment);
      t8 = space();
      create_component(trigger3.$$.fragment);
      t9 = space();
      create_component(trigger4.$$.fragment);
      t10 = space();
      div2 = element("div");
      t11 = text("test");
      t12 = space();
      create_component(footer.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-1myew8g\"]", document.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      claim_component(header.$$.fragment, nodes);
      t1 = claim_space(nodes);
      h1 = claim_element(nodes, "H1", {});
      var h1_nodes = children(h1);
      t2 = claim_text(h1_nodes, "About Svelte");
      h1_nodes.forEach(detach_dev);
      t3 = claim_space(nodes);
      div0 = claim_element(nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      claim_component(tabs.$$.fragment, div0_nodes);
      t4 = claim_space(div0_nodes);
      if_block.l(div0_nodes);
      div0_nodes.forEach(detach_dev);
      t5 = claim_space(nodes);
      claim_component(trigger0.$$.fragment, nodes);
      t6 = claim_space(nodes);
      claim_component(trigger1.$$.fragment, nodes);
      t7 = claim_space(nodes);
      div1 = claim_element(nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      claim_component(trigger2.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach_dev);
      t8 = claim_space(nodes);
      claim_component(trigger3.$$.fragment, nodes);
      t9 = claim_space(nodes);
      claim_component(trigger4.$$.fragment, nodes);
      t10 = claim_space(nodes);
      div2 = claim_element(nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      t11 = claim_text(div2_nodes, "test");
      div2_nodes.forEach(detach_dev);
      t12 = claim_space(nodes);
      claim_component(footer.$$.fragment, nodes);
      this.h();
    },
    h: function hydrate() {
      document.title = "About";
      add_location(h1, file$3, 25, 0, 589);
      attr_dev(div0, "class", "spacer svelte-133z8mf");
      add_location(div0, file$3, 27, 0, 612);
      attr_dev(div1, "class", "spacer svelte-133z8mf");
      add_location(div1, file$3, 51, 0, 1332);
      attr_dev(div2, "class", "spacer svelte-133z8mf");
      add_location(div2, file$3, 71, 0, 1805);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      mount_component(header, target, anchor);
      insert_dev(target, t1, anchor);
      insert_dev(target, h1, anchor);
      append_dev(h1, t2);
      insert_dev(target, t3, anchor);
      insert_dev(target, div0, anchor);
      mount_component(tabs, div0, null);
      append_dev(div0, t4);
      if_block.m(div0, null);
      insert_dev(target, t5, anchor);
      mount_component(trigger0, target, anchor);
      insert_dev(target, t6, anchor);
      mount_component(trigger1, target, anchor);
      insert_dev(target, t7, anchor);
      insert_dev(target, div1, anchor);
      mount_component(trigger2, div1, null);
      insert_dev(target, t8, anchor);
      mount_component(trigger3, target, anchor);
      insert_dev(target, t9, anchor);
      mount_component(trigger4, target, anchor);
      insert_dev(target, t10, anchor);
      insert_dev(target, div2, anchor);
      append_dev(div2, t11);
      insert_dev(target, t12, anchor);
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
      32) {
        trigger0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      trigger0.$set(trigger0_changes);
      var trigger1_changes = {};

      if (dirty &
      /*$$scope*/
      32) {
        trigger1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      trigger1.$set(trigger1_changes);
      var trigger2_changes = {};

      if (dirty &
      /*$$scope*/
      32) {
        trigger2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      trigger2.$set(trigger2_changes);
      var trigger3_changes = {};

      if (dirty &
      /*$$scope*/
      32) {
        trigger3_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      trigger3.$set(trigger3_changes);
      var trigger4_changes = {};

      if (dirty &
      /*$$scope*/
      32) {
        trigger4_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      trigger4.$set(trigger4_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(header.$$.fragment, local);
      transition_in(tabs.$$.fragment, local);
      transition_in(trigger0.$$.fragment, local);
      transition_in(trigger1.$$.fragment, local);
      transition_in(trigger2.$$.fragment, local);
      transition_in(trigger3.$$.fragment, local);
      transition_in(trigger4.$$.fragment, local);
      transition_in(footer.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(header.$$.fragment, local);
      transition_out(tabs.$$.fragment, local);
      transition_out(trigger0.$$.fragment, local);
      transition_out(trigger1.$$.fragment, local);
      transition_out(trigger2.$$.fragment, local);
      transition_out(trigger3.$$.fragment, local);
      transition_out(trigger4.$$.fragment, local);
      transition_out(footer.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      destroy_component(header, detaching);
      if (detaching) detach_dev(t1);
      if (detaching) detach_dev(h1);
      if (detaching) detach_dev(t3);
      if (detaching) detach_dev(div0);
      destroy_component(tabs);
      if_block.d();
      if (detaching) detach_dev(t5);
      destroy_component(trigger0, detaching);
      if (detaching) detach_dev(t6);
      destroy_component(trigger1, detaching);
      if (detaching) detach_dev(t7);
      if (detaching) detach_dev(div1);
      destroy_component(trigger2);
      if (detaching) detach_dev(t8);
      destroy_component(trigger3, detaching);
      if (detaching) detach_dev(t9);
      destroy_component(trigger4, detaching);
      if (detaching) detach_dev(t10);
      if (detaching) detach_dev(div2);
      if (detaching) detach_dev(t12);
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

  var tweenType = "from";
  var start = "top 70%";
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
      Icon: Icon,
      faArrowDown: faArrowDown,
      items: items,
      activeItem: activeItem,
      tabChange: tabChange,
      tweenType: tweenType,
      start: start
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("items" in $$props) $$invalidate(1, items = $$props.items);
    if ("activeItem" in $$props) $$invalidate(0, activeItem = $$props.activeItem);
    if ("tweenType" in $$props) tweenType = $$props.tweenType;
    if ("start" in $$props) $$invalidate(3, start = $$props.start);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [activeItem, items, tabChange, start];
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
