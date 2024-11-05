const BoneGrafts = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Bone Grafts Section */}
      <section className="py-16 bg-dental-navy">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-8 text-dental-accent1">
            Bone Grafts
          </h1>
          <p className="text-dental-accent1 max-w-3xl mx-auto text-center">
            Dental bone grafts are a procedure used to build up bone in your jaw
            when there isn&apos;t enough to support dental implants or other
            treatments. During the process, a small amount of bone material is
            placed in the area where more bone is needed. This can come from
            your own body, a donor, animal bone or synthetic materials. Over
            time, your body will grow new bone around the graft, strengthening
            the area. Bone grafts can help ensure that dental implants have a
            stable foundation.
          </p>
        </div>
      </section>

      {/* Crown Lengthening Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-dental-navy text-center">
            Crown Lengthening
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-center">
            Crown lengthening is a dental procedure that involves removing some
            gum and sometimes a small amount of bone around the tooth to expose
            more of a tooth&apos;s structure. This is often done when a tooth is
            decayed or damaged below the gum line, making it difficult to place
            a crown or filling. By increasing the visible portion of the tooth,
            crown lengthening helps ensure a better fit for restorations and
            improves the overall appearance of your smile. It&apos;s a simple
            procedure that can make a big difference in both function and
            aesthetics.
          </p>
        </div>
      </section>
    </div>
  );
};

export default BoneGrafts;
