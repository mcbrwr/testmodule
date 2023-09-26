# testmodule
testing something

Trying to build a module that exports react components, build with typescript & css modules.

Currently having some issues: https://stackoverflow.com/questions/77179232/how-to-set-up-an-npm-library-with-tsx-components-and-css-modules

To test:

Clone this project
```
git clone https://github.com/mcbrwr/testmodule.git
cd testmodule
yarn install
yarn link
```

go back to the parent folder and create a NextJS test project
```
cd ..
npx create-next-app@latest testproject --eslint --src-dir --use-yarn --no-tailwind --ts --import-alias '@/*' --no-app
cd testproject
yarn link "@mcbrwr/testmodule"
yarn dev
```

Open the index.tsx in the testproject, and change it to:
```
import { TestComponent } from "@eightmedia/testmodule";

export default function Home() {
  return (
    <>
      <TestComponent />
    </>
  );
}
```

That should work. But it doesn't.
