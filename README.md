# testmodule

testing something

Trying to build a module that exports react components, build with typescript & css modules.

Currently having some issues: https://stackoverflow.com/questions/77179232/how-to-set-up-an-npm-library-with-tsx-components-and-css-modules

To test:

Clone this project and [link the package](https://classic.yarnpkg.com/lang/en/docs/cli/link/)

```
git clone https://github.com/mcbrwr/testmodule.git
cd testmodule
yarn install
yarn build
yarn link
```

go back to the parent folder, create a fresh NextJS test project and link the above module package:

```
cd ..
npx create-next-app@latest testproject --eslint --src-dir --use-yarn --no-tailwind --ts --import-alias '@/*' --no-app
cd testproject
yarn link "@mcbrwr/testmodule"
yarn dev
```

Open the index.tsx in the testproject, and change it to:

```
import { TestComponent } from "@mcbrwr/testmodule";

export default function Home() {
  return (
    <>
      <TestComponent />
    </>
  );
}
```

That should work. But it doesn't. ☠️
Error that appears is that the imported component is not a function.
