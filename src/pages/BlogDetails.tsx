import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock, Share2, BookOpen, ChevronRight } from 'lucide-react';
import { Container } from '../components/common/Container';
import { BLOG_POSTS } from '../data/blog';

export const BlogDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const post = BLOG_POSTS.find((p) => p.slug === slug);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} — IQONIX LABS Insights`;
    } else {
      document.title = 'Article Not Found — IQONIX LABS';
    }
  }, [post]);

  if (!post) {
    return (
      <div className="py-24 text-center">
        <Container>
          <div className="max-w-md mx-auto p-8 rounded-2xl bg-surface-container-lowest border border-primary-container/20 shadow-md">
            <BookOpen className="w-12 h-12 text-primary-container/40 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-on-surface mb-2">Article Not Found</h2>
            <p className="text-sm text-on-surface-variant mb-6">
              The article you are looking for does not exist or may have been updated.
            </p>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary-container text-white text-xs font-semibold hover:bg-secondary-container transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Blog Articles</span>
            </Link>
          </div>
        </Container>
      </div>
    );
  }

  // Related posts
  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <article className="py-12 md:py-16">
      <Container>
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-caption text-on-surface-variant mb-6">
          <Link to="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 opacity-40" />
          <Link to="/blog" className="hover:text-primary transition-colors">
            Blog & News
          </Link>
          <ChevronRight className="w-3.5 h-3.5 opacity-40" />
          <span className="text-on-surface font-medium truncate max-w-xs">{post.title}</span>
        </div>

        {/* Back Link */}
        <div className="mb-5">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-btn font-semibold text-primary-container hover:text-secondary-container transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="max-w-3xl mb-8">
          <div className="flex items-center gap-2.5 mb-3 flex-wrap">
            <span className="px-2.5 py-0.5 rounded-full bg-on-tertiary-container text-primary text-caption-caps font-bold">
              {post.category}
            </span>
            {post.isPlaceholder && (
              <span className="placeholder-tag">
                Sample Demonstration Article
              </span>
            )}
          </div>

          <h1 className="text-page-title font-bold tracking-tight text-on-surface mb-4 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-5 text-caption text-on-surface-variant pb-5 border-b border-primary-container/15">
            <div className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-primary" />
              <span className="font-semibold text-on-surface">{post.author}</span>
              {post.authorRole && <span className="text-outline">({post.authorRole})</span>}
            </div>
            <div className="flex items-center gap-1.5 text-outline">
              <Calendar className="w-4 h-4 text-primary" />
              <span>{post.publishedAt}</span>
            </div>
            <div className="flex items-center gap-1.5 text-outline">
              <Clock className="w-4 h-4 text-primary" />
              <span>{post.readingTime}</span>
            </div>
          </div>
        </header>

        {/* Featured Cover Image */}
        <div className="max-w-3xl rounded-2xl overflow-hidden mb-10 shadow-lg border border-primary-container/15">
          <img
            src={post.coverImage}
            alt={post.coverImageAlt}
            className="w-full h-[280px] sm:h-[380px] object-cover"
          />
        </div>

        {/* Body Content */}
        <div className="max-w-2xl">
          <div className="space-y-4 text-body text-on-surface/90 leading-relaxed">
            {post.body.map((paragraph, idx) => (
              <p
                key={idx}
                className={
                  paragraph.startsWith('•') || paragraph.startsWith('1.') || paragraph.startsWith('2.') || paragraph.startsWith('3.')
                    ? 'pl-4 border-l-2 border-primary-container/30 font-medium'
                    : paragraph.startsWith('[Sample Content')
                    ? 'p-3 rounded-lg bg-surface-container-low text-caption text-primary font-semibold'
                    : ''
                }
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Footer of article with Share & CTA */}
          <div className="mt-10 pt-6 border-t border-primary-container/15 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-caption text-on-surface-variant">
              Target Audience: <strong>Grades 5–10 CBSE & ICSE Educators</strong>
            </div>
            <Link
              to="/contact"
              className="px-5 py-2 rounded-lg bg-primary-container text-white text-btn font-semibold hover:bg-secondary-container transition-all shadow-sm"
            >
              Contact Academic Advisory
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        {otherPosts.length > 0 && (
          <div className="mt-14 pt-10 border-t border-primary-container/15">
            <h3 className="text-section-title font-bold text-on-surface mb-6 tracking-tight">
              More Insights & Updates
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherPosts.map((other) => (
                <div
                  key={other.id}
                  className="p-5 md:p-6 rounded-2xl bg-surface-container-lowest border border-primary-container/15 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-caption-caps font-bold text-primary block mb-2">
                      {other.category}
                    </span>
                    <h4 className="text-card-title font-semibold text-on-surface mb-2 line-clamp-2 hover:text-primary-container tracking-tight">
                      <Link to={`/blog/${other.slug}`}>{other.title}</Link>
                    </h4>
                    <p className="text-body-sm text-on-surface-variant line-clamp-2 leading-relaxed">
                      {other.summary}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-primary-container/10">
                    <Link
                      to={`/blog/${other.slug}`}
                      className="text-btn font-semibold text-primary-container hover:underline"
                    >
                      Read Article →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </Container>
    </article>
  );
};
