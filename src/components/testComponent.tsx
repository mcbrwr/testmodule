import styles from "./testComponent.module.css";

export interface TestComponentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  icon?: string;
}

export const TestComponent = ({ children, icon }: TestComponentProps) => {
  return (
    <div className={styles.wrapper}>
      <h1>{children}</h1>
      <p>{icon}</p>
    </div>
  );
};
