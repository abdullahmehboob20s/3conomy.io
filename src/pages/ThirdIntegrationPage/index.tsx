import IntegrationCard from "@/components/IntegrationCard";
import brands from "@/lib/brands";

function ThirdIntegrationPage() {
  return (
    <div className="p-10">
      <h1 className="text-3xl mb-8">Integrations</h1>

      <main className="space-y-6">
        {Object.keys(brands).map((brand) => (
          <IntegrationCard
            key={brand}
            brandLogo={brands[brand].brandLogo}
            brandName={brands[brand].brandName}
          />
        ))}
      </main>
    </div>
  );
}

export default ThirdIntegrationPage;
