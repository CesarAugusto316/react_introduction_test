import { FC } from 'react';
import { Counter, Input, Profile } from './components';


export const App: FC = () => {
  return (
    <div
      id="app"
      className="font-sans h-screen w-full bg-base-200
    text-base-content flex items-center justify-center"
    >
      <main className="flex flex-col items-center gap-4">
        <h1 className="text-center text-3xl mb-4 font-bold text-red-500">
          React + Vite + Typescript
        </h1>

        {/* Try the components by uncomment */}
        {/* <Counter /> */}
        {/* <Input id="first-name" name="name" placeholder="Name" type="text" /> */}

        <Profile
          name="César Rivera"
          title="Senior Engineer"
          details="I have 7 years of experince"
        />
      </main>
    </div>
  );
};
