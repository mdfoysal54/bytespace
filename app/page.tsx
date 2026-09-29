"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, Play, Sparkles, Users, BookOpen, Clock3 } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CourseCard } from "@/components/CourseCard";
import { SectionHeading } from "@/components/SectionHeading";
import { CategoryCard } from "@/components/CategoryCard";
import { courses } from "@/data/courses";

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCourses =
    activeCategory === "All"
      ? courses
      : courses.filter((course) => course.category === activeCategory);

  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="hero-grid-pattern" />
          <div className="container hero-inner">
            <div className="hero-copy">
              <p className="eyebrow hero-eyebrow">
                <Sparkles size={15} /> Learn at your own pace
              </p>
              <h1>
                Get access to courses that <span>move you forward.</span>
              </h1>
              <p className="hero-text">
                Build useful skills with focused courses, experienced instructors and a learning space that stays simple.
              </p>
              <div className="hero-actions">
                <Link href="#courses" className="button">
                  Explore courses <ArrowRight size={17} />
                </Link>
                <Link href="#community" className="button button-ghost-light">
                  <Play size={15} fill="currentColor" /> See how it works
                </Link>
              </div>
              <div className="hero-proof">
                <div className="avatar-stack">
                  <span>AR</span>
                  <span>MS</span>
                  <span>NK</span>
                  <span>+</span>
                </div>
                <p>
                  <strong>20,000+</strong> learners are building something new.
                </p>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-orbit orbit-one" />
              <div className="hero-orbit orbit-two" />
              <div className="hero-card hero-card-main">
                <div className="mini-window">
                  <div className="window-top">
                    <i />
                    <i />
                    <i />
                    <span>bytespace / course</span>
                  </div>
                  <div className="course-preview">
                    <div className="preview-kicker">DESIGN FUNDAMENTALS</div>
                    <h3>Build interfaces people understand.</h3>
                    <p>12 lessons · 4h 20m</p>
                    <div className="preview-progress">
                      <span />
                    </div>
                    <div className="preview-footer">
                      <span>Lesson 08</span>
                      <strong>72%</strong>
                    </div>
                  </div>
                </div>
              </div>
              <div className="floating-note note-one">
                <BookOpen size={16} />
                <span>
                  <strong>120+</strong>
                  <small>new lessons</small>
                </span>
              </div>
              <div className="floating-note note-two">
                <Users size={16} />
                <span>
                  <strong>4.9/5</strong>
                  <small>average rating</small>
                </span>
              </div>
              <div className="hero-shape shape-yellow" />
              <div className="hero-shape shape-pink" />
            </div>
          </div>
        </section>

        <section className="trust-strip">
          <div className="container trust-inner">
            <span>Learn from people working at</span>
            <strong>northstar</strong>
            <strong>orbit</strong>
            <strong>studio&co</strong>
            <strong>vertex</strong>
            <strong>frame</strong>
          </div>
        </section>

        <section id="courses" className="section section-courses">
          <div className="container">
            <SectionHeading
              eyebrow="Find your next skill"
              title="Discover new paths, build real skills."
              text="A curated mix of practical courses for design, development, data, business and everything around them."
              href="#categories"
              linkLabel="Browse categories"
            />
            <div className="filter-row">
              {["All", "Design", "Development", "Data", "Business", "Marketing"].map(
                (category) => (
                  <button
                    key={category}
                    className={`filter ${
                      activeCategory === category ? "active" : ""
                    }`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                )
              )}
            </div>
            <div className="course-grid">
              {filteredCourses.map((course) => (
                <CourseCard key={course.title} course={course} />
              ))}
            </div>
          </div>
        </section>

        <section id="categories" className="section category-section">
          <div className="container">
            <SectionHeading
              eyebrow="Explore by category"
              title="Choose a direction. We'll help with the details."
            />
            <div className="category-grid">
              <CategoryCard name="Design" count="84" />
              <CategoryCard name="Development" count="112" />
              <CategoryCard name="Data" count="68" />
              <CategoryCard name="Marketing" count="52" />
              <CategoryCard name="Business" count="46" />
              <CategoryCard name="Personal growth" count="31" />
            </div>
          </div>
        </section>

        <section id="instructors" className="section instructor-section">
          <div className="container instructor-panel">
            <div className="instructor-copy">
              <p className="eyebrow">For curious learners</p>
              <h2>Make progress that feels visible.</h2>
              <p>
                Short lessons, practical exercises and a clear place to keep track of what you have learned. No clutter, no complicated setup.
              </p>
              <div className="feature-list">
                <div>
                  <span>
                    <Check size={15} />
                  </span>
                  <p>
                    <strong>Learn in small steps</strong>
                    <br />
                    Pick up where you left off whenever you have time.
                  </p>
                </div>
                <div>
                  <span>
                    <Check size={15} />
                  </span>
                  <p>
                    <strong>Learn from practitioners</strong>
                    <br />
                    Lessons shaped by people who use these skills every day.
                  </p>
                </div>
                <div>
                  <span>
                    <Check size={15} />
                  </span>
                  <p>
                    <strong>Keep your momentum</strong>
                    <br />
                    Save courses and build a learning list that works for you.
                  </p>
                </div>
              </div>
              <Link href="/register" className="button button-dark">
                Start learning <ArrowRight size={17} />
              </Link>
            </div>
            <div className="instructor-art">
              <div className="art-glow" />
              <div className="art-window">
                <div className="art-top">
                  <span>MY LEARNING</span>
                  <span>•••</span>
                </div>
                <div className="art-stat-row">
                  <div>
                    <small>Weekly goal</small>
                    <strong>4.5h</strong>
                    <div className="bar">
                      <span />
                    </div>
                  </div>
                  <div>
                    <small>Completed</small>
                    <strong>18</strong>
                    <div className="bar">
                      <span />
                    </div>
                  </div>
                </div>
                <div className="art-list">
                  <div>
                    <span className="art-thumb thumb-blue" />
                    <p>
                      <strong>Product design basics</strong>
                      <small>Lesson 8 of 12</small>
                    </p>
                    <b>72%</b>
                  </div>
                  <div>
                    <span className="art-thumb thumb-pink" />
                    <p>
                      <strong>Build better web apps</strong>
                      <small>Lesson 4 of 10</small>
                    </p>
                    <b>40%</b>
                  </div>
                  <div>
                    <span className="art-thumb thumb-lime" />
                    <p>
                      <strong>Analytics essentials</strong>
                      <small>Lesson 2 of 8</small>
                    </p>
                    <b>25%</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section metrics-section">
          <div className="container metrics-grid">
            <div>
              <strong>20k+</strong>
              <span>Learners</span>
            </div>
            <div>
              <strong>360+</strong>
              <span>Courses</span>
            </div>
            <div>
              <strong>90+</strong>
              <span>Instructors</span>
            </div>
            <div>
              <strong>4.9/5</strong>
              <span>Average rating</span>
            </div>
          </div>
        </section>

        <section id="community" className="section community-section">
          <div className="container community-inner">
            <div>
              <p className="eyebrow">Community feedback</p>
              <h2>Discover what our community is saying</h2>
            </div>

            <div className="community-cards">
              <div className="community-card">
                <span>01</span>
                <div>
                  <p className="community-quote">
                    The lessons are short and practical. I shipped my
                    first client project in a month.
                  </p>
                  <strong>Lamia Sultana</strong>
                  <small>UI designer</small>
                </div>
              </div>

              <div className="community-card">
                <span>02</span>
                <div>
                  <p className="community-quote">
                    Publishing my own course took an afternoon, and
                    students started enrolling the same week.
                  </p>
                  <strong>Imran Hossain</strong>
                  <small>Frontend developer</small>
                </div>
              </div>

              <div className="community-card">
                <span>03</span>
                <div>
                  <p className="community-quote">
                    Clear paths made it easy to know what to learn next.
                  </p>
                  <strong>Farzana Akter</strong>
                  <small>Marketing lead</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container cta-card">
            <div>
              <p className="eyebrow">Ready when you are</p>
              <h2>One good course can change your next six months.</h2>
            </div>
            <Link href="/register" className="button button-dark">
              Create your account <ArrowRight size={17} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}