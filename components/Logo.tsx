export default function Logo() {
return (
<div className="flex items-center gap-3">

<div className="h-10 w-10 rounded-xl bg-gray-950 flex items-center justify-center">
<svg width="18" height="18" viewBox="0 0 24 24" fill="none">
<path
d="M5 19L19 5M19 5H9M19 5V15"
stroke="white"
strokeWidth="2"
strokeLinecap="round"
strokeLinejoin="round"
/>
</svg>
</div>

<span className="text-lg font-semibold text-gray-950">
Direction90
</span>

</div>
);
}


