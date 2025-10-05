import Carousel from '../components/home/Carousel';
import NewsSection from '../components/home/NewsSection';
import Sidebar from '../components/home/Sidebar';
import ObjectivesSection from '../components/home/ObjectivesSection';
import ActionsSection from '../components/home/ActionsSection';
import ResultsSection from '../components/home/ResultsSection';
import PartnersSection from '../components/home/PartnersSection';
import ContactSection from '../components/home/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Carousel */}
      <Carousel />

      {/* News Section - Full Width */}
      <div className="max-w-7xl mx-auto px-4 py-8 lg:py-12">
        <NewsSection />
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1 order-2 lg:order-1">
            <Sidebar />
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3 order-1 lg:order-2 space-y-12">
            <ObjectivesSection />
            <ActionsSection />
            <ResultsSection />
            {/* <PartnersSection /> */}
            <ContactSection />
          </main>
        </div>
      </div>
    </div>
  );
}
