# Controlled creation UI
React components provided by Codex. Import the CSS with NativeCreationLayout. fields are controlled dropdown descriptors: id,label,value,options[{value,label,disabled}],disabled,onChange,onColor. Preserve original slot order. Pass existing real auth/session adapters; no fixture authentication.

NativeCreationPreview expects SYNCHRONOUS renderer.draw and native cycle.describe/nextState. Do not pass the platform async renderer directly. Use source reference-code/creation-frame-renderer.js via a lifecycle-owned adapter or add an explicit async adapter with cancellation and stale-result protection.

NativeColorPalette uses colors[{id,tintRGB}], value,onPreview,onConfirm,onCancel,preview; temporary state must not mutate committed draft. Pass as layout palette to replace fields while editing color. Caller restores on cancel.

Verified local: 5 actual renderer modes, female bank2 frame1; 7 interaction checks including exact palette cancel pixels; PC1280x720/mobile844x390 no horizontal overflow and visible submit. Still pending: original skin dropdown popup fidelity, persistence/reset, hosted acceptance. Do not copy preview-entry.js fixture logic.
