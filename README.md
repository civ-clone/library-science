# library-science

A library of science-related objects: the advances (`Advances`), the `Research` yield (`Yields`) and the
`ChooseResearch` player action (`PlayerActionts`, `PlayerActions/ChooseResearch`).

Each is re-exported from its own `base-*` package, not copied: `ChooseResearch` is
`base-player-action-choose-research`'s class, so `instanceof` and a save's class names agree whichever path a ruleset
or client imports it from.
