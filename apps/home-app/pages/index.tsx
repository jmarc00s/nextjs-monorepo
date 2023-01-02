import { Container, Navbar } from '@nextjs-monorepo/ui';

export function Index() {
  return (
    <>
      <Navbar title="Home App" />
      <Container>
        <h1 className="text-center underline text-3xl">Welcome to HomeApp</h1>
      </Container>
    </>
  );
}

export default Index;
