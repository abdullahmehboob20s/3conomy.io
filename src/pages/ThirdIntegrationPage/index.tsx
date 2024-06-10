import Container from "@/components/Container";
import Heading from "@/components/Heading";
import IntegrationCard from "@/components/IntegrationCard";
import brands from "@/lib/brands";

function ThirdIntegrationPage() {
  return (
    <Container>
      <Heading className="mb-8">Integrations</Heading>

      <main className="space-y-4 2xl:space-y-6">
        {Object.keys(brands).map((brand) => (
          <IntegrationCard
            key={brand}
            brandLogo={brands[brand].brandLogo}
            brandName={brands[brand].brandName}
          />
        ))}
      </main>
    </Container>
  );
}

export default ThirdIntegrationPage;
