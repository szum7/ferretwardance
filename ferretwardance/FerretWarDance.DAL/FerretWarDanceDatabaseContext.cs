using System;
using FerretWarDance.DAL.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace FerretWarDance.DAL
{
    public partial class FerretWarDanceDatabaseContext : DbContext
    {
        public FerretWarDanceDatabaseContext()
        {
        }

        public FerretWarDanceDatabaseContext(DbContextOptions<FerretWarDanceDatabaseContext> options)
            : base(options)
        {
        }

        public virtual DbSet<ArchiveTodo> ArchiveTodo { get; set; }
        public virtual DbSet<LongTodo> LongTodo { get; set; }
        public virtual DbSet<ShortTodo> ShortTodo { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Data Source=(localdb)\\ProjectsV13;Initial Catalog=FerretWarDance.Database;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ArchiveTodo>(entity =>
            {
                entity.HasKey(e => e.Id)
                    .HasName("PK_ARCHIVETODO_ID")
                    .IsClustered(false);

                entity.Property(e => e.Content).HasColumnType("text");

                entity.Property(e => e.IsActive)
                    .IsRequired()
                    .HasMaxLength(255);
            });

            modelBuilder.Entity<LongTodo>(entity =>
            {
                entity.HasKey(e => e.Id)
                    .HasName("PK_LONGTODO_ID")
                    .IsClustered(false);

                entity.Property(e => e.Content).HasColumnType("text");

                entity.Property(e => e.IsActive)
                    .IsRequired()
                    .HasMaxLength(255);
            });

            modelBuilder.Entity<ShortTodo>(entity =>
            {
                entity.HasKey(e => e.Id)
                    .HasName("PK_SHORTTODO_ID")
                    .IsClustered(false);

                entity.Property(e => e.Content).HasColumnType("text");

                entity.Property(e => e.IsActive)
                    .IsRequired()
                    .HasMaxLength(255);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
