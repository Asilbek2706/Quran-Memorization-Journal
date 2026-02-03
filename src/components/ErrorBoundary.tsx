import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = { hasError: false };

    public static getDerivedStateFromError(_: Error): State {
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Xatolik yuz berdi:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="error-boundary-fallback">
                    <h2>Nimadir xato ketdi...</h2>
                    <p>Iltimos, sahifani yangilang yoki birozdan so'ng urunib ko'ring.</p>
                    <button onClick={() => window.location.reload()}>Sahifani yangilash</button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;