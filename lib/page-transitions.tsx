import type React from "react"
import PageTransition from "@/components/page-transition"

export function withPageTransition<P extends object>(Component: React.ComponentType<P>) {
  return function TransitionedComponent(props: P) {
    return (
      <PageTransition>
        <Component {...props} />
      </PageTransition>
    )
  }
}
