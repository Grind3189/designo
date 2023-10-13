import Details from "../components/locations/Details";
import Map from "../components/locations/Map";
function Locations() {
  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col md:gap-[31px] xl:flex-row-reverse z-0">
        <Map latitude={43.644148256268615} longitude={-79.39452867383888} location="canada" />
        <Details
          country="Canada"
          city="Toronto"
          email="contact@designo.co"
          officeName="Designo Central Office"
          phone="+1 253-863-8967"
          postalCode="M9C 3J5"
          province="Ontario"
          street="3886 Wellington Street"
        />
      </div>
      <div className="flex flex-col md:gap-[31px] xl:flex-row-reverse">
        <Map latitude={-30.329245677223295} longitude={149.7882238038146} location="australia" />
        <Details
          country="Australia"
          city="New South Wales"
          email="contact@designo.au"
          officeName="Designo AU Office"
          phone="(02) 6720 9092"
          postalCode="2443"
          province=""
          street="19 Balonne Street"
        />
      </div>
      <div className="flex flex-col md:gap-[31px] xl:flex-row-reverse">
        <Map latitude={53.710405473663435} longitude={-1.341749302168085} location="united kingdom" />
        <Details
          country="United Kingdom"
          city="Rhyd-y-fro"
          email="contact@designo.uk"
          officeName="Designo UK Office"
          phone="078 3115 1400"
          postalCode="SA8 9GA"
          province=""
          street="13 Colorado Way"
        />
      </div>
    </section>
  );
}

export default Locations;
