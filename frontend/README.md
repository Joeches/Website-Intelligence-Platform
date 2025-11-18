# Frontend — AI Website Intelligence
4. Run dev: `npm run dev`
5. Build: `npm run build`


## Notes
- Ensure NEXT_PUBLIC_API_URL points to your Render service.
- Ensure Firebase config in `SessionProvider` matches your project.
- Stripe client uses server-side `/stripe/create-checkout` to initiate Checkout.




/*
UI/UX & DASHBOARD SPEC — WORLD-CLASS PROFESSIONAL
Design goals: clear enterprise polish, high trust, actionable insights, fast workflows.


1) Design language
- Palette: primary (navy #0f172a), accent (blue #2563eb), mint (green #10b981), neutrals
- Typography: system font stack; headings bold, body medium
- Spacing: 8px base grid
- Corners: 12px rounded cards
- Motion: subtle micro-interactions, staggered fades on load


2) Core UX principles
- Instant feedback on actions (toasts & skeletons)
- Progressive disclosure: show high-level score then allow deep-dive
- Accessibility: semantic HTML, ARIA in dynamic components, keyboard navigation
- Mobile-first responsiveness


3) Dashboard sections (priority order)
- Overview: recent scans, monthly quota, quick-scan input
- Scans: list with filters (date, url, plan) and bulk export
- Detailed result: sections: SEO, Accessibility, Performance, AI Rewrites, Suggested fixes, JSON-LD
- Reports: PDF generation with agency branding option (Pro/Enterprise)
- Billing: plan, invoices, manage subscription (Stripe Portal link)
- Team & Settings: add team members, roles, custom domain (enterprise)


4) Interactions & microcopy
- Empty states: guide user to start scan with CTAs
- Error states: precise guidance (ex: CORS / API key issues) and link to support
- Onboarding: 3-step modal: connect Firebase auth, enter Stripe, run first scan


5) Visual components
- Card: title, small meta row, body
- KPI bar: responsive tiles with sparkline
- Result diff view: original vs AI-rewrite with accept/copy actions
- PDF builder: checkbox toggles to include/exclude sections and upload custom logo


6) Accessibility & performance
- Lighthouse: aim 90+ performance and accessibility
- Lazy-load large UI pieces
- Use server-side rendering for landing & SEO pages


7) Enterprise considerations
- White-label: allow custom logo + domain and CSS overrides
- Audit logs: store scans & who ran them
- Rate-limits and quotas enforced server-side
- SSO (future): SAML / OIDC support extension points


End of UI/UX spec.
*/SS
