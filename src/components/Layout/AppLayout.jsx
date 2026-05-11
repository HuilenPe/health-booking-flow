/**
 * - centered on desktop
 * - full width on small screens
 * - max width based on the Figma mobile frame: 428px
 */
function AppLayout({ children }) {
  return (
    <main className="app-layout">
      <div className="app-shell">{children}</div>
    </main>
  )
}

export default AppLayout