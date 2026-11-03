import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, BookOpen } from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { BLOG_POSTS } from '../../data/blog';

interface BlogPreviewProps {
  isFullListing?: boolean;
}

export const BlogPreview: React.FC<BlogPreviewProps> = ({ isFullListing = false }) => {
  const postsToDisplay = isFullListing ? BLOG_POSTS : BLOG_POSTS.slice(0, 4);

  return (
    <section className="py-16 md:py-24 bg-surface-bright" id="blog">
      <Container>
        <SectionHeading
          tag="Insights & Updates"
          title="Blog / News"
          description="Articles, announcements, STEM activity highlights, and official educational insights from IQONIX LABS."
          action={
            !isFullListing ? (
              <Link
                to="/blog"
                className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold text-primary-container hover:text-secondary-container transition-colors"
              >
                <span>Browse All Articles</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            ) : undefined
          }
        />

        {postsToDisplay.length === 0 ? (
          <div className="py-16 text-center bg-surface-container-lowest rounded-2xl border border-primary-container/15 p-8">
            <BookOpen className="w-12 h-12 text-primary-container/40 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-on-surface">No Articles Published Yet</h3>
            <p className="text-sm text-on-surface-variant mt-1">
              Official educational articles and institutional updates will be published soon.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {postsToDisplay.map((post) => (
              <article
                key={post.id}
                className="bg-surface-container-lowest rounded-2xl overflow-hidden border border-primary-container/15 shadow-sm hover:shadow-md hover:border-primary-container/30 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={post.coverImage}
                      alt={post.coverImageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {post.isPlaceholder && (
                      <span className="absolute top-3 right-3 placeholder-tag">
                        Sample Article
                      </span>
                    )}
                  </div>

                  <div className="p-5 md:p-6">
                    <div className="flex items-center justify-between text-caption mb-2.5">
                      <span className="font-bold text-caption-caps text-primary">
                        {post.category}
                      </span>
                      <span className="text-outline flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.publishedAt}
                      </span>
                    </div>

                    <h3 className="text-card-title font-semibold text-on-surface mb-2 line-clamp-2 group-hover:text-primary-container transition-colors tracking-tight">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>

                    <p className="text-body-sm text-on-surface-variant line-clamp-3 mb-3.5 leading-relaxed">
                      {post.summary}
                    </p>

                    <div className="flex items-center gap-1.5 text-caption text-on-surface-variant font-medium pt-2 border-t border-primary-container/10">
                      <User className="w-3.5 h-3.5 text-primary" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 md:p-6 pt-0">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-btn font-semibold text-primary-container hover:text-secondary-container transition-colors group-hover:underline"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};
