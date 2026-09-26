# Future commerce — not part of Phase 1

The user explicitly deferred all automated commerce. None of these modules or routes is exposed today.

1. **Accounts:** decide whether a dedicated Firebase web app should share the desktop Auth project. Establish data boundaries and validate production configuration separately.
2. **Trials:** define explicit activation, server timestamps, exactly 24 hours, an atomic one-trial-per-account policy, and a desktop verification contract. Do not trust browser clocks, query parameters or local storage.
3. **Licensing:** define current-version rights, device limits, revocation, upgrades and any bounded offline grace before implementation. A browser must never self-grant a plan.
4. **Payments:** choose a real merchant provider suitable for the business jurisdiction and currencies. Verify amounts and products server-side, validate signatures, and handle duplicate/replayed events idempotently. No fake success screens.
5. **Downloads:** audit a clean release, publish actual version/size/checksum/signing metadata, and arrange controlled storage and authorization. Do not commit installers into this marketing source tree.
6. **Desktop integration:** requires its own explicitly authorized task. This website build did not modify MAX PC or install a licensing check into it.

Until those decisions are made, WhatsApp Business remains the manual demo and purchase channel.
