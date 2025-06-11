import { 
  FaBookOpen, FaGraduationCap, FaLaptopCode, FaFlask, FaGlobeAfrica, FaChalkboardTeacher,
  FaPaintBrush, FaRunning, FaLightbulb 
} from 'react-icons/fa';

export default function AcademicsSection() {
  return (
    <section className="bg-white px-6 py-10 rounded-2xl shadow-md max-w-6xl mx-auto my-12 space-y-8">
      {/* Header */}
      <div className="flex items-center gap-3 border-b pb-4">
        <FaBookOpen className="text-orange-500 text-3xl" />
        <h2 className="text-3xl font-bold text-gray-800">Academics</h2>
      </div>

      {/* Intro Text */}
      <div className="space-y-3">
        <p className="flex items-center gap-2 text-gray-700 text-lg">
          <FaGraduationCap className="text-blue-500" />
          Our academic programs are crafted to ignite curiosity and develop lifelong learners.
        </p>
        <p className="text-gray-600">
          We provide a dynamic blend of theory, practicals, and project-based learning across core and advanced subjects to prepare students for real-world success.
        </p>
      </div>

      {/* Academic Areas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <AcademicCard
          icon={<FaLaptopCode />}
          title="Tech & Innovation"
          text="From beginner coding to robotics, our tech-focused curriculum builds tomorrow’s problem-solvers."
        />
        <AcademicCard
          icon={<FaFlask />}
          title="Sciences"
          text="Hands-on labs and inquiry-based learning in Physics, Chemistry, and Biology for deep scientific understanding."
        />
        <AcademicCard
          icon={<FaGlobeAfrica />}
          title="Languages & Humanities"
          text="Develop communication, critical thinking, and global awareness through English, Arabic, Civic Education, and History."
        />
        <AcademicCard
          icon={<FaChalkboardTeacher />}
          title="STEM Integration"
          text="Interdisciplinary teaching that blends math, science, and tech to build creative and logical thinkers."
        />
        <AcademicCard
          icon={<FaGraduationCap />}
          title="Exam Preparation"
          text="Structured guidance for national and international exams such as BECE, WAEC, and more."
        />
        {/* New cards added below */}
        <AcademicCard
          icon={<FaPaintBrush />}
          title="Arts & Creativity"
          text="Encouraging self-expression through visual arts, music, and creative projects."
        />
        <AcademicCard
          icon={<FaRunning />}
          title="Physical Education"
          text="Promoting health, fitness, teamwork, and sportsmanship for holistic development."
        />
        <AcademicCard
          icon={<FaLightbulb />}
          title="Entrepreneurship & Leadership"
          text="Cultivating business acumen, leadership skills, and innovative thinking."
        />
      </div>

      {/* CTA Button */}
      <div className="text-center mt-10">
        <a href="/curriculum" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold">
          View Full Curriculum
        </a>
      </div>
    </section>
  );
}

function AcademicCard({ icon, title, text }) {
  return (
    <div className="p-6 bg-gray-50 border rounded-xl hover:shadow-lg hover:-translate-y-1 transition-transform duration-300 cursor-pointer">
      <div className="flex items-center gap-3 mb-3 text-orange-500 text-2xl">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-1">{title}</h3>
      <p className="text-gray-600 text-sm">{text}</p>
    </div>
  );
}
