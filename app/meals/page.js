import Link from "next/link";
import { Suspense } from "react";
import styles from "./page.module.css";
import MealsGrid from "../../components/meals/MealsGrid";
import { getMeals } from "@/lib/meals";
import Loading from "./loading-out";

async function MealsLoading() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}

function Meals() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals, create{" "}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share your Favorite Recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <Suspense fallback={<Loading />}>
          <MealsLoading />
        </Suspense>
      </main>
    </>
  );
}

export default Meals;
