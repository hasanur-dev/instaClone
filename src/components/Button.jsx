export default function Button({
  children,
  onClick,
  type = 'primary',
  disabled,
}) {
  if (type === 'primary')
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className="bg-blue-500 w-full text-white rounded-md py-2 text-lg font-medium"
      >
        {children}
      </button>
    )
  if (type === 'secondary') return <button onClick={onClick}>{children}</button>
}
