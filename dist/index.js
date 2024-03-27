var b = Object.defineProperty;
var _ = (e, t, n) => t in e ? b(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var s = (e, t, n) => (_(e, typeof t != "symbol" ? t + "" : t, n), n);
const H = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), S = "https://www.patreon.com/api/oauth2/v2/";
async function u(e, t) {
  try {
    return await (await fetch(e, {
      headers: {
        Authorization: `Bearer ${t.access_token}`
      }
    })).json();
  } catch (n) {
    return Promise.reject(n);
  }
}
function d(e, t) {
  const n = new URL(e, S);
  return t && (n.search = t == null ? void 0 : t.toString()), n.toString();
}
const p = (e, t) => {
  if (t ?? (t = /* @__PURE__ */ new Map()), e.attributes) {
    const n = e.type, o = t.get(n) ?? /* @__PURE__ */ new Set();
    for (const [i, c] of Object.entries(e.attributes))
      c && o.add(i);
    t.set(n, o);
  }
  if (e.relationships)
    for (const n of Object.values(e.relationships))
      n != null && p(n, t);
  return t;
}, f = (e, t, n) => {
  if (t ?? (t = []), n ?? (n = /* @__PURE__ */ new Set()), e.relationships)
    for (const [o, i] of Object.entries(e.relationships)) {
      if (i == null)
        continue;
      const c = [...t, o];
      n.add(c.join(".")), f(i, c, n);
    }
  return n;
};
function m(e, t) {
  t ?? (t = new URLSearchParams());
  const n = p(e);
  for (const [i, c] of n.entries())
    t.set(`fields[${i}]`, [...c].join(","));
  const o = f(e);
  return o.size > 0 && t.set("include", [...o].join(",")), t;
}
function l(e, t) {
  const n = d(e, m(t));
  return (o) => u(
    n,
    o
  );
}
function a(e, t) {
  const n = m(t);
  return (o, ...i) => u(
    d(e(...i), n),
    o
  );
}
const g = (e) => a((t) => `campaigns/${t}`, e), k = (e) => a((t) => `campaigns/${t}/members`, e), v = (e) => a((t) => `campaigns/${t}/posts`, e), x = (e) => l("campaigns", e), w = (e) => l("identity", e), O = (e) => a((t) => `members/${t}`, e), j = (e) => a((t) => `posts/${t}`, e), B = (e) => a((t) => `webhooks/${t}`, e), P = (e) => l("webhooks", e), Q = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  campaignById: g,
  campaignMembersById: k,
  campaignPostsById: v,
  campaigns: x,
  identity: w,
  memberById: O,
  postById: j,
  webhookById: B,
  webhooks: P
}, Symbol.toStringTag, { value: "Module" }));
class r {
  constructor(t) {
    s(this, "attributes");
    s(this, "relationships");
    this.attributes = t == null ? void 0 : t.attributes, this.relationships = t == null ? void 0 : t.relationships;
  }
}
class $ extends r {
  constructor() {
    super(...arguments);
    s(this, "type", "address");
  }
}
class M extends r {
  constructor() {
    super(...arguments);
    s(this, "type", "benefit");
  }
}
class A extends r {
  constructor() {
    super(...arguments);
    s(this, "type", "campaign");
  }
}
class I extends r {
  constructor() {
    super(...arguments);
    s(this, "type", "deliverable");
  }
}
class R extends r {
  constructor() {
    super(...arguments);
    s(this, "type", "goal");
  }
}
class z extends r {
  constructor() {
    super(...arguments);
    s(this, "type", "media");
  }
}
class E extends r {
  constructor() {
    super(...arguments);
    s(this, "type", "member");
  }
}
class U extends r {
  constructor() {
    super(...arguments);
    s(this, "type", "pledge");
  }
}
class L extends r {
  constructor() {
    super(...arguments);
    s(this, "type", "post");
  }
}
class C extends r {
  constructor() {
    super(...arguments);
    s(this, "type", "tier");
  }
}
class D extends r {
  constructor() {
    super(...arguments);
    s(this, "type", "user");
  }
}
class F extends r {
  constructor() {
    super(...arguments);
    s(this, "type", "user");
  }
}
const W = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AddressSchema: $,
  BenefitSchema: M,
  CampaignSchema: A,
  DeliverableSchema: I,
  GoalSchema: R,
  MediaSchema: z,
  MemberSchema: E,
  PledgeEventSchema: U,
  PostSchema: L,
  TierSchema: C,
  UserSchema: D,
  WebhookSchema: F
}, Symbol.toStringTag, { value: "Module" }));
var h = /* @__PURE__ */ ((e) => (e.Refresh = "refresh_token", e.Access = "access_token", e))(h || {});
function y(e) {
  const t = async function(i) {
    const c = await o.accessToken.refresh(i);
    return y(c);
  }, n = async function(i) {
    e.revoke(i.toString());
  }, o = {
    access_token: e.token.access_token,
    expires_at: e.token.expires_at,
    expires_in: e.token.expires_in,
    refresh_token: e.token.refresh_token,
    scope: e.token.scope,
    token_type: e.token.token_type,
    version: e.token.version,
    accessToken: e,
    isExpired: e.expired,
    refresh: t,
    revoke: n,
    revokeAll: e.revokeAll
  };
  return o;
}
const q = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TokenType: h,
  toPatreonToken: y
}, Symbol.toStringTag, { value: "Module" }));
export {
  H as Data,
  Q as Endpoints,
  W as Schemas,
  q as Types
};
