# Fresh-atlas reference samples

Source: locally retained PokeMMO client addons.pak, SHA256 recorded in manifest.json. Original art belongs to its respective rights holders; not original commissioned artwork.

16 UV references resolve to 13 content-addressed PNGs. Derived using source-observed fresh atlas initialization, per-item upload order, reverse allocation, 2px padding, Nearest filtering and ClampToEdge. Original source PNGs and original withinVerifiedPadding flags are not overwritten. This does not reproduce unknown recycled slots in an already-running native client.

Integration: preserve current CreationPreview scheduling fix. Load this supplement alongside the fixed native-character/v1 manifest; verify source hash, exact row key, delta, dimensions and PNG SHA256. Sampled PNGs are already UV-resolved: draw at (0,0), never apply original delta twice. Other rows retain original validation. Reference TypeScript illustrates this integration; adapt only types and imports as necessary.

Local checks: 16 references across 4556 contiguous fresh-atlas start offsets; 7 full-pixel boundary cases each; opaque-neighbor and unknown-history controls; 396 actual renderer draws over both genders, allowed footwear/leggings, two palettes and creation mode frames. These are not live application acceptance.
