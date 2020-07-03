import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, s as safe_not_equal, d as _assertThisInitialized, e as dispatch_dev, f as _createClass, S as SvelteComponentDev, v as validate_slots, g as element, t as text, h as claim_element, j as children, k as claim_text, l as detach_dev, m as attr_dev, n as add_location, o as insert_dev, p as append_dev, q as listen_dev, r as _slicedToArray, u as set_data_dev, w as noop, x as space, y as create_component, z as query_selector_all, A as claim_space, B as claim_component, C as mount_component, D as transition_in, E as transition_out, F as destroy_component } from './client.499aa1e0.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src\\Components\\shared\\EmailBtn.svelte";

function create_fragment(ctx) {
  var button;
  var t;
  var mounted;
  var dispose;
  var block = {
    c: function create() {
      button = element("button");
      t = text(
      /*btnText*/
      ctx[0]);
      this.h();
    },
    l: function claim(nodes) {
      button = claim_element(nodes, "BUTTON", {
        class: true
      });
      var button_nodes = children(button);
      t = claim_text(button_nodes,
      /*btnText*/
      ctx[0]);
      button_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(button, "class", "btn svelte-12rg59o");
      add_location(button, file, 10, 0, 195);
    },
    m: function mount(target, anchor) {
      insert_dev(target, button, anchor);
      append_dev(button, t);

      if (!mounted) {
        dispose = listen_dev(button, "click",
        /*mailTo*/
        ctx[1], false, false, false);
        mounted = true;
      }
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*btnText*/
      1) set_data_dev(t,
      /*btnText*/
      ctx[0]);
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(button);
      mounted = false;
      dispose();
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
  var email = $$props.email;
  var _$$props$btnText = $$props.btnText,
      btnText = _$$props$btnText === void 0 ? "Send Email" : _$$props$btnText;

  function mailTo() {
    var mail = document.createElement("a");
    mail.href = "mailto:".concat(email);
    mail.click();
  }

  var writable_props = ["email", "btnText"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<EmailBtn> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("EmailBtn", $$slots, []);

  $$self.$set = function ($$props) {
    if ("email" in $$props) $$invalidate(2, email = $$props.email);
    if ("btnText" in $$props) $$invalidate(0, btnText = $$props.btnText);
  };

  $$self.$capture_state = function () {
    return {
      email: email,
      btnText: btnText,
      mailTo: mailTo
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("email" in $$props) $$invalidate(2, email = $$props.email);
    if ("btnText" in $$props) $$invalidate(0, btnText = $$props.btnText);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [btnText, mailTo, email];
}

var EmailBtn = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(EmailBtn, _SvelteComponentDev);

  var _super = _createSuper(EmailBtn);

  function EmailBtn(options) {
    var _this;

    _classCallCheck(this, EmailBtn);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      email: 2,
      btnText: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "EmailBtn",
      options: options,
      id: create_fragment.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*email*/
    ctx[2] === undefined && !("email" in props)) {
      console.warn("<EmailBtn> was created without expected prop 'email'");
    }

    return _this;
  }

  _createClass(EmailBtn, [{
    key: "email",
    get: function get() {
      throw new Error("<EmailBtn>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<EmailBtn>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "btnText",
    get: function get() {
      throw new Error("<EmailBtn>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<EmailBtn>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return EmailBtn;
}(SvelteComponentDev);

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file$1 = "src\\routes\\index.svelte"; // (22:53) {:else}

function create_else_block(ctx) {
  var p;
  var t;
  var block = {
    c: function create() {
      p = element("p");
      t = text("blah blah missed out");
      this.h();
    },
    l: function claim(nodes) {
      p = claim_element(nodes, "P", {
        class: true
      });
      var p_nodes = children(p);
      t = claim_text(p_nodes, "blah blah missed out");
      p_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(p, "class", "test svelte-u0k2wk");
      add_location(p, file$1, 21, 60, 569);
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
    id: create_else_block.name,
    type: "else",
    source: "(22:53) {:else}",
    ctx: ctx
  });
  return block;
} // (22:4) {#if val === 420}


function create_if_block(ctx) {
  var p;
  var t;
  var block = {
    c: function create() {
      p = element("p");
      t = text(
      /*someString*/
      ctx[1]);
      this.h();
    },
    l: function claim(nodes) {
      p = claim_element(nodes, "P", {
        class: true
      });
      var p_nodes = children(p);
      t = claim_text(p_nodes,
      /*someString*/
      ctx[1]);
      p_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(p, "class", "test svelte-u0k2wk");
      add_location(p, file$1, 21, 21, 530);
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
    source: "(22:4) {#if val === 420}",
    ctx: ctx
  });
  return block;
}

function create_fragment$1(ctx) {
  var t0;
  var h1;
  var t1;
  var t2;
  var div3;
  var div0;
  var figure0;
  var t3;
  var img0;
  var img0_src_value;
  var t4;
  var figcaption0;
  var t5;
  var t6;
  var t7;
  var div1;
  var figure1;
  var t8;
  var img1;
  var img1_src_value;
  var t9;
  var figcaption1;
  var p;
  var t10;
  var strong;
  var t11;
  var t12;
  var t13;
  var div2;
  var current;
  var emailbtn0 = new EmailBtn({
    props: {
      email: "max@none.com",
      btnText: "Email Max"
    },
    $$inline: true
  });

  function select_block_type(ctx, dirty) {
    if (
    /*val*/
    ctx[0] === 420) return create_if_block;
    return create_else_block;
  }

  var current_block_type = select_block_type(ctx);
  var if_block = current_block_type(ctx);
  var emailbtn1 = new EmailBtn({
    props: {
      email: "none@none.com"
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      t0 = space();
      h1 = element("h1");
      t1 = text("Great success!");
      t2 = space();
      div3 = element("div");
      div0 = element("div");
      figure0 = element("figure");
      create_component(emailbtn0.$$.fragment);
      t3 = space();
      img0 = element("img");
      t4 = space();
      figcaption0 = element("figcaption");
      t5 = text("Have fun with Sapper!");
      t6 = space();
      if_block.c();
      t7 = space();
      div1 = element("div");
      figure1 = element("figure");
      create_component(emailbtn1.$$.fragment);
      t8 = space();
      img1 = element("img");
      t9 = space();
      figcaption1 = element("figcaption");
      p = element("p");
      t10 = text("You too can be a\n          ");
      strong = element("strong");
      t11 = text("cool kid");
      t12 = text("\n          use Svelte");
      t13 = space();
      div2 = element("div");
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-oofwcx\"]", document.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      h1 = claim_element(nodes, "H1", {
        class: true
      });
      var h1_nodes = children(h1);
      t1 = claim_text(h1_nodes, "Great success!");
      h1_nodes.forEach(detach_dev);
      t2 = claim_space(nodes);
      div3 = claim_element(nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      div0 = claim_element(div3_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      figure0 = claim_element(div0_nodes, "FIGURE", {
        class: true
      });
      var figure0_nodes = children(figure0);
      claim_component(emailbtn0.$$.fragment, figure0_nodes);
      t3 = claim_space(figure0_nodes);
      img0 = claim_element(figure0_nodes, "IMG", {
        alt: true,
        src: true,
        class: true
      });
      t4 = claim_space(figure0_nodes);
      figcaption0 = claim_element(figure0_nodes, "FIGCAPTION", {});
      var figcaption0_nodes = children(figcaption0);
      t5 = claim_text(figcaption0_nodes, "Have fun with Sapper!");
      figcaption0_nodes.forEach(detach_dev);
      figure0_nodes.forEach(detach_dev);
      t6 = claim_space(div0_nodes);
      if_block.l(div0_nodes);
      div0_nodes.forEach(detach_dev);
      t7 = claim_space(div3_nodes);
      div1 = claim_element(div3_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      figure1 = claim_element(div1_nodes, "FIGURE", {
        class: true
      });
      var figure1_nodes = children(figure1);
      claim_component(emailbtn1.$$.fragment, figure1_nodes);
      t8 = claim_space(figure1_nodes);
      img1 = claim_element(figure1_nodes, "IMG", {
        alt: true,
        src: true,
        class: true
      });
      t9 = claim_space(figure1_nodes);
      figcaption1 = claim_element(figure1_nodes, "FIGCAPTION", {});
      var figcaption1_nodes = children(figcaption1);
      p = claim_element(figcaption1_nodes, "P", {
        class: true
      });
      var p_nodes = children(p);
      t10 = claim_text(p_nodes, "You too can be a\n          ");
      strong = claim_element(p_nodes, "STRONG", {
        class: true
      });
      var strong_nodes = children(strong);
      t11 = claim_text(strong_nodes, "cool kid");
      strong_nodes.forEach(detach_dev);
      t12 = claim_text(p_nodes, "\n          use Svelte");
      p_nodes.forEach(detach_dev);
      figcaption1_nodes.forEach(detach_dev);
      figure1_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      t13 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", {
        class: true
      });
      children(div2).forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Sapper project template";
      attr_dev(h1, "class", "svelte-u0k2wk");
      add_location(h1, file$1, 10, 0, 214);
      attr_dev(img0, "alt", "Success Kid");
      if (img0.src !== (img0_src_value = "images/successkid.jpg")) attr_dev(img0, "src", img0_src_value);
      attr_dev(img0, "class", "svelte-u0k2wk");
      add_location(img0, file$1, 16, 6, 358);
      add_location(figcaption0, file$1, 17, 6, 418);
      attr_dev(figure0, "class", "svelte-u0k2wk");
      add_location(figure0, file$1, 14, 4, 283);
      attr_dev(div0, "class", "card");
      add_location(div0, file$1, 13, 2, 260);
      attr_dev(img1, "alt", "Success Kid");
      if (img1.src !== (img1_src_value = "images/successkid.jpg")) attr_dev(img1, "src", img1_src_value);
      attr_dev(img1, "class", "svelte-u0k2wk");
      add_location(img1, file$1, 28, 6, 718);
      attr_dev(strong, "class", "svelte-u0k2wk");
      add_location(strong, file$1, 32, 10, 840);
      attr_dev(p, "class", "svelte-u0k2wk");
      add_location(p, file$1, 30, 8, 799);
      add_location(figcaption1, file$1, 29, 6, 778);
      attr_dev(figure1, "class", "svelte-u0k2wk");
      add_location(figure1, file$1, 26, 4, 662);
      attr_dev(div1, "class", "card");
      add_location(div1, file$1, 25, 2, 639);
      attr_dev(div2, "class", "card");
      add_location(div2, file$1, 38, 2, 945);
      attr_dev(div3, "class", "grid svelte-u0k2wk");
      add_location(div3, file$1, 11, 0, 238);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, h1, anchor);
      append_dev(h1, t1);
      insert_dev(target, t2, anchor);
      insert_dev(target, div3, anchor);
      append_dev(div3, div0);
      append_dev(div0, figure0);
      mount_component(emailbtn0, figure0, null);
      append_dev(figure0, t3);
      append_dev(figure0, img0);
      append_dev(figure0, t4);
      append_dev(figure0, figcaption0);
      append_dev(figcaption0, t5);
      append_dev(div0, t6);
      if_block.m(div0, null);
      append_dev(div3, t7);
      append_dev(div3, div1);
      append_dev(div1, figure1);
      mount_component(emailbtn1, figure1, null);
      append_dev(figure1, t8);
      append_dev(figure1, img1);
      append_dev(figure1, t9);
      append_dev(figure1, figcaption1);
      append_dev(figcaption1, p);
      append_dev(p, t10);
      append_dev(p, strong);
      append_dev(strong, t11);
      append_dev(p, t12);
      append_dev(div3, t13);
      append_dev(div3, div2);
      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if_block.p(ctx, dirty);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(emailbtn0.$$.fragment, local);
      transition_in(emailbtn1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(emailbtn0.$$.fragment, local);
      transition_out(emailbtn1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(h1);
      if (detaching) detach_dev(t2);
      if (detaching) detach_dev(div3);
      destroy_component(emailbtn0);
      if_block.d();
      destroy_component(emailbtn1);
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
  var val = 420;
  var someString = "Light one up, Pug style";
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Routes> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Routes", $$slots, []);

  $$self.$capture_state = function () {
    return {
      EmailBtn: EmailBtn,
      val: val,
      someString: someString
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("val" in $$props) $$invalidate(0, val = $$props.val);
    if ("someString" in $$props) $$invalidate(1, someString = $$props.someString);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [val, someString];
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
