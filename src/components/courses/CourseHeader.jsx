import React from 'react';
import { Clock, BarChart3, ArrowRight } from 'lucide-react';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

export default function CourseHeader({ course }) {
  const handleEnroll = () => {
    alert('Inscrição realizada com sucesso!');
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#3490dc] via-[#155dfc] to-[#3490dc] text-white">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
          {/* Course Image */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 overflow-hidden shadow-2xl">
              {course.image_url ? (
                <img
                  src={course.image_url}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <BarChart3 className="w-16 h-16 text-white/60" />
                </div>
              )}
            </div>
          </div>

          {/* Course Info */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-secondary hover:bg-secondary/90 text-white border-0 px-4 py-1 text-sm font-medium">
                {course.level}
              </Badge>
              <div className="flex items-center gap-2 text-white/90">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">{course.duration}</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              {course.title}
            </h1>

            {course.subtitle && (
              <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed mb-8">
                {course.subtitle}
              </p>
            )}

            {/* Enroll Button */}
            <Button
              onClick={handleEnroll}
              className="bg-secondary hover:bg-secondary/90 text-white border-0 px-6 py-3 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-secondary/50 transition-all duration-300 group">
              Inscrever-se no Curso
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
