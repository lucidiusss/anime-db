"use client";

export default function Filter() {
  return (
    <div className="w-1/4 min-h-screen relative bg-white rounded-xl p-4">
      <div className="absolute top-0 left-0 w-full h-full bg-white/50 backdrop-blur-sm rounded-xl">
        <h1 className="text-black text-3xl font-bold text-center mt-24">
          в разработке...
        </h1>
      </div>
      <section>
        <h1>Статус</h1>
        {/*<Checkbox
          inputId="1"
          checked={checked}
          onChange={(e: CheckboxChangeEvent) => setChecked(e.checked)}
        />
        <Checkbox
          inputId="2"
          checked={checked}
          onChange={(e: CheckboxChangeEvent) => setChecked(e.checked)}
        />*/}
      </section>
      <section>
        <h1>Тип</h1>
      </section>
      <section>
        <h1>Сортировка</h1>
      </section>
      <section>
        <h1>Сезон</h1>
      </section>
      <section>
        <h1>Оценка</h1>
      </section>
      <section>
        <h1>Эпизод</h1>
      </section>
      <section>
        <h1>Рейтинг</h1>
      </section>
      <section>
        <h1>Аудитория</h1>
      </section>
    </div>
  );
}
