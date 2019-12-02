using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using FerretWarDance.DAL.Models;

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

        public virtual DbSet<TestTable> TestTable { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Data Source=(localdb)\\ProjectsV13;Initial Catalog=FerretWarDance.Database;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<TestTable>(entity =>
            {
                entity.HasKey(e => e.Id)
                    .HasName("PK_TESTTABLE_ID")
                    .IsClustered(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(255);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
